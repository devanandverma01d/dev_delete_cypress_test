const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://consumer.staging.geotoll.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    email:'geotoll.qa.smartapp@gmail.com',
    password:'QA2024@ab',
  },
  viewportHeight:768,
  viewportWidth:1360,
  defaultCommandTimeout:60000
});
