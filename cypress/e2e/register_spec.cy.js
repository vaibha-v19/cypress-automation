const locators = require('../fixtures/locators');
const urls = require('../support/resources/urls');

describe('Registration Tests', () => {
  beforeEach(() => {
    cy.visit(urls.CONTACT_URL);
  });

  it('should test registration with all data sets', () => {
    cy.fixture('register_test').then((testData) => {
      testData.forEach((data) => {
        const uniqueEmail = `${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;

        cy.log(`Testing registration for: ${data.first_name} ${data.last_name}`);

        cy.xpath(locators.myAccountDropdown).click();
        cy.xpath(locators.registerOption).click();

        if (data.first_name) cy.xpath(locators.firstNameField).type(data.first_name);
        if (data.last_name) cy.xpath(locators.lastNameField).type(data.last_name);
        cy.xpath(locators.emailField).type(uniqueEmail);
        if (data.telephone) cy.xpath(locators.telephoneField).type(data.telephone);
        if (data.password) cy.xpath(locators.passwordField).type(data.password);
        if (data.confirm_password) cy.xpath(locators.confirmPasswordField).type(data.confirm_password);
        if (data.agree_box_checked) cy.xpath(locators.agreeBox).check({ force: true });

        cy.xpath(locators.continueButton).click();

        if (data.expected_result === "Successfull") {
          cy.xpath(locators.accountCreatedHeading).should('be.visible');

          // Optional: Logout after successful registration
          cy.xpath(locators.myAccountDropdown).click();
          //cy.xpath("//a[text()='Logout']").first().click();
          cy.xpath(locators.logoutOption).first().click();
          
        } else {
          cy.xpath(locators.accountCreatedHeading).should('not.exist');
        }

        cy.visit(urls.CONTACT_URL);
      });
    });
  });
});
