import { de, en, pt } from "../locale/locale";

export default function checkLocale(locale) {
  if (locale === "en") {
    return en;
  }
  if (locale === "de") {
    return de;
  }
  return pt;
}

module.exports = checkLocale;
