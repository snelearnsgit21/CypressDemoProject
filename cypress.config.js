const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  requestTimeout: 30000,
  responseTimeout: 30000,
  pageLoadTimeout: 120000,
  viewportWidth: 1440,
  viewportHeight: 900,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  numTestsKeptInMemory: 10,
  video : true,
  projectId : "hnd1eg",
  e2e: {
    baseUrl : "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
        log(message){
          console.log(message);
          return null;
        }
      });
    },
  },
});
