const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c721ps',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "http://universities.hipolabs.com"
  },
  
  env: {
  }
});
