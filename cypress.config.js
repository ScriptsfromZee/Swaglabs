const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  "chromeWebSecurity": false,
  video: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
