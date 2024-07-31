const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
