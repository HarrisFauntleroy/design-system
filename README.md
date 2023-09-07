# Design System 🎨

<p align="center">
    <a href="https://github.com/HarrisFauntleroy/design-system/releases">
        <img alt="GitHub release" src="https://img.shields.io/github/package-json/v/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
    <a href="/LICENSE.md">
        <img alt="GitHub" src="https://img.shields.io/github/license/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
    <a href="https://github.com/HarrisFauntleroy/design-system/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors-anon/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
    <a href="https://github.com/HarrisFauntleroy/design-system/actions">
        <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/HarrisFauntleroy/design-system/main?&style=for-the-badge">
    </a>
    <a href="https://github.com/HarrisFauntleroy/design-system/issues?q=is%3Aopen+is%3Aissue">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
    <a href="https://github.com/HarrisFauntleroy/design-system/issues?q=is%3Aopen+is%3Aissue">
        <img alt="GitHub issues" src="https://img.shields.io/github/last-commit/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
    </a>
    <a href="https://github.com/HarrisFauntleroy/design-system/issues?q=is%3Aopen+is%3Aissue">
        <img alt="GitHub issues" src="https://img.shields.io/github/commit-activity/w/HarrisFauntleroy/design-system?&style=for-the-badge">
    </a>
        <a href="https://www.npmjs.com/package/@harrisfauntleroy/design-system?activeTab=readme">
        <img alt="npm downloads" src="https://img.shields.io/npm/dt/%40harrisfauntleroy/design-system?&style=for-the-badge">
    </a>
</p>

Design System is a UI library that leverages the power of various tools such as
Husky, ESlint, Prettier, and Chromatic for Storybook to deliver high-quality and
consistent UI features across various projects.

[📚 Check out the storybook hosted on Chromatic 🎨](https://main--64d482866191a67a0437dc6b.chromatic.com)

---

## Table of Contents 📖

1. [Features](#features-🚀)
2. [Local Development](#local-development-🛠️)
3. [Contributing](#contributing-🤝)
4. [License](#license-⚖️)
5. [Disclaimer](#disclaimer-🚨)

## Features 🚀

- Markdown Editor and Viewers 🗒️ with support for:
  - GitHub Flavoured Markdown
  - Table of Contents
  - Mermaid diagrams
  - Katex

## Local Development 🛠️

Here's how you can set up Design System in your local dev environment:

**Installation**

```zsh
# Install dependencies with pnpm
pnpm install
```

```zsh
# Start development server with storybook
pnpm run storybook
```

_Please refer to the package.json for additional details and scripts._

## Trunk-Based Development and Git Hooks

This repository adopts a **Trunk-Based Development** approach to encourage:

- Short-lived branches or direct trunk modifications
- Frequent merges
- High collaboration among developers

### Automated Git Hooks

To maintain code quality, we've set up automated Git hooks that perform the
following tasks before any `git push` operation:

- **Linting**: Enforces a consistent code style across the codebase.
- **Formatting**: Applies standardized code formatting.
- **Testing**: Executes all unit tests to catch regressions and errors at an
  early stage.
- **Building**: Compiles the code and bundles all assets to ensure everything is
  set up correctly.

This automation helps keep our codebase clean, stable, and error-free.

## Contributing 🤝

If you'd like to contribute, please see our
[contribution guidelines](CONTRIBUTING.md) for more information.

## License ⚖️

This software is distributed under the terms of the MIT License. You can see the
full license [here](LICENSE).

## Disclaimer 🚨

This software is currently a work in progress and considered in the ALPHA phase.
As we continue to update and improve, please expect features to evolve and APIs
to change. We appreciate your patience and value your feedback! 🙌
