const withPWA = require("next-pwa");

module.exports = withPWA({
  i18n: {
    locales: ["en", "pt", "de"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
  },
});
