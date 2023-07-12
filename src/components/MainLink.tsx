import {
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { Role } from "database/generated/prisma-client";
import Link from "next/link";
import { Fragment, ReactNode, useCallback } from "react";

const { ADMIN, USER, GUEST } = Role;

export type MainLinkProps = {
  href?: string;
  label?: string;
  icon?: ReactNode;
  expectedRole?: Role;
  userRole?: Role;
  color?: string;
  className?: string;
  onClick?: () => void;
};

function useRolePermission(userRole?: Role, expectedRole?: Role) {
  const isDisabled =
    expectedRole === USER && userRole !== expectedRole && userRole !== ADMIN;
  const isHidden = expectedRole === ADMIN && userRole !== expectedRole;

  return { isDisabled, isHidden };
}

export function MainLink({
  icon,
  color,
  label,
  className,
  href,
  onClick,
  expectedRole,
  userRole = GUEST,
}: MainLinkProps) {
  const theme = useMantineTheme();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const { isDisabled, isHidden } = useRolePermission(userRole, expectedRole);

  if (isHidden) return <Fragment />;

  const disabledColor = theme.colors.gray[5];
  const enabledColor =
    theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black;
  const hoverBgColor =
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0];

  return (
    <UnstyledButton
      component={Link}
      href={isDisabled ? "" : href || ""}
      className={className}
      onClick={isDisabled ? undefined : handleClick}
      aria-disabled={isDisabled}
      sx={(theme) => ({
        "display": "block",
        "width": "100%",
        "padding": theme.spacing.xs,
        "borderRadius": theme.radius.sm,
        "color": isDisabled ? disabledColor : enabledColor,
        "&:hover": {
          backgroundColor: isDisabled ? undefined : hoverBgColor,
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light" opacity={isDisabled ? 0.5 : 1}>
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
