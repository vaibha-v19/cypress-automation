// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <refrence types="cypress"/>
/// <refrence types="cypress-xpath"/>
Cypress.Commands.add('login', (email, password) => {
  cy.xpath("//a[@title='My Account']").click();
  cy.xpath("//a[text()='Login']").click();
  cy.xpath("//input[@id='input-email']").type(email);
  cy.xpath("//input[@id='input-password']").type(password);
  cy.xpath("//input[@value='Login']").click();
});
