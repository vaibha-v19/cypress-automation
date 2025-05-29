const { defineConfig } = require('cypress');
const readExcel = require('./cypress/fixtures/readExcel');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcelData() {
          return readExcel('cypress/fixtures/login_test.xlsx');
        }
      });
    },
    baseUrl: 'https://tutorialsninja.com/demo',
  },
});
