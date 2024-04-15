const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl:'https://tetc.maryland.geotoll.com',
    setupNodeEvents(on, config) {

    },
  },
  viewportHeight:768,
  viewportWidth:1360,
  defaultCommandTimeout:60000
});