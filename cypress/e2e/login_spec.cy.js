const locators = require('../fixtures/locators');
const urls = require('../support/resources/urls');

describe('Login Tests', () => {
  let loginData;

  before(() => {
    cy.fixture('login_test').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.visit(urls.CONTACT_URL);
  });

  it('should test login with all data sets', () => {
    loginData.forEach((data) => {
      cy.log(`Testing with email: ${data.email} and password: ${data.password}`);

      cy.xpath(locators.myAccountDropdown).click();
      cy.xpath(locators.loginOption).invoke('removeAttr', 'target').click();
      cy.xpath(locators.loginEmailField).type(data.email);
      cy.xpath(locators.loginPasswordField).type(data.password);
      cy.xpath(locators.loginButton).click();

      if (data.expected_result === "Successfull") {
        cy.xpath(locators.loginVerificationText).should('be.visible');

        // Log out to reset session
        cy.xpath(locators.myAccountDropdown).click();
        cy.xpath(locators.logoutOption).click();
      } else {
        cy.xpath(locators.loginVerificationText).should('not.exist');
      }

      // Navigate back to homepage for next iteration
      cy.visit(urls.CONTACT_URL);
    });
  });
});
