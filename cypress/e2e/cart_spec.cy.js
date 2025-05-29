const locators = require('../fixtures/locators');
const urls = require('../support/resources/urls');

describe('Cart Functionality Tests', () => {
  beforeEach(() => {
    cy.visit(urls.BASE_URL);
    cy.login('testUser01@test.com', 'Test@01');
    cy.wait(1000);
    cy.visit(urls.BASE_URL);

    //cy.xpath(locators.HOME_BUTTON).click();
    //cy.xpath(locators.HOME_BUTTON).should('be.visible').click();

  });

  it('should add an item to the cart', () => {

    cy.xpath(locators.ADD_TO_CART_BUTTON).first().click();

    cy.xpath(locators.SUCCESS_CART_MESSAGE).should('be.visible');
    cy.xpath(locators.SHOPPING_CART_POPUP).click();
    cy.xpath(locators.PRODUCT_INFO).should('be.visible');
  });

  it('should update quantity in the cart', () => {
    cy.xpath(locators.ADD_TO_CART_BUTTON).first().click();
    cy.wait(2000);

    cy.xpath(locators.SHOPPING_CART_POPUP).click();
    //cy.xpath(locators.UPDATE_QUANTITY_FIELD).clear().type('5');
    cy.xpath(locators.UPDATE_QUANTITY_FIELD).first().clear().type('5');

    cy.xpath(locators.UPDATE_QUANTITY_BUTTON).click();
    cy.xpath(locators.UPDATE_CART_MSG).should('be.visible');
  });

  it('should empty the cart', () => {
    cy.xpath(locators.ADD_TO_CART_BUTTON).first().click();
    cy.xpath(locators.SHOPPING_CART_POPUP).click();
    cy.xpath(locators.EMPTY_CART_BUTTON).click();
    //cy.xpath(locators.CONTINUE_BUTTON).should('be.visible');
    cy.xpath(locators.EMPTY_CART_MSG).should('contain.text', 'Your shopping cart is empty!');
  });
});
