import { pt, en, de } from "../locale/locale";

export function checkLocale(locale) {
  if (locale === "en") {
    return en;
  } else if (locale === "de") {
    return de;
  } else {
    return pt;
  }
}

module.exports = checkLocale;
