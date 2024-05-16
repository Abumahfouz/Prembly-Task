const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c721ps',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://universities.hipolabs.com"
  },
  
  env: {
  }
});
