import en from "./i18n/en.json";

import { format } from "date-fns";
import { t, use } from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export function initI18n() {
  use(HttpBackend)
    .use(initReactI18next)
    .init({
      debug: false,
      load: "currentOnly",
      fallbackLng: "en",
      lng: "en",
      partialBundledLanguages: true,
      resources: {
        en: { translation: en },
      },
      keySeparator: false,
      nsSeparator: false,
      interpolation: {
        escapeValue: false, // react already saves from xss
      },
    });
}

export function formatDate(date: Date) {
  return format(date, t("dd/MM/yyyy"));
}

export function formatDateAndTime(date: Date) {
  return format(date, t("dd/MM/yyyy h:mm a"));
}
