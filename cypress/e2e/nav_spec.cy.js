const locators = require('../fixtures/locators');
const urls = require('../support/resources/urls');

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit(urls.BASE_URL);
  });

  it('should verify the Contact link', () => {
    cy.xpath(locators.contactLink).first().click();
    cy.url().should('eq', urls.CONTACT_URL);
  });

  it('should verify My Account dropdown links', () => {
    cy.xpath(locators.myAccountDropdown).click();
    cy.xpath(locators.registerLink).click();
    cy.url().should('eq', urls.REGISTER_URL);

    cy.go('back');
    cy.xpath(locators.myAccountDropdown).click();
    cy.xpath(locators.loginLink).click();
    cy.url().should('eq', urls.LOGIN_URL);
  });

  it('should verify the Wish List link after login', () => {
    cy.login('testUser01@test.com', 'Test@01');
    cy.xpath(locators.homeButton).click();
    cy.xpath(locators.wishListLink).first().click();
    cy.url().should('eq', urls.WISHLIST_URL);
  });

  it('should verify the Shopping Cart link', () => {
    cy.xpath(locators.shoppingCartLink).first().click();
    cy.url().should('eq', urls.SHOPPING_CART_URL);
  });

  it('should verify the Checkout link', () => {
    cy.xpath(locators.checkoutLink).first().click();
    cy.url().should('eq', urls.CHECKOUT_URL);
  });

  it('should verify currency dropdown options', () => {
    const expectedCurrencies = ['€Euro', '£Pound Sterling', '$US Dollar'];

    expectedCurrencies.forEach((currency, index) => {
      cy.xpath(locators.currencyButton).click();
      cy.xpath(locators.currencyDropdownOptions).eq(index).should('contain.text', currency);
      cy.xpath(locators.currencyDropdownOptions).eq(index).click();
      cy.wait(1000); // Wait for dropdown to close
    });
  });
});
