let loginPage;
let productsPage;
let checkOutPage;

before(() => {
  cy.fixture('elementsLocator').then((data) => {
    loginPage = data.loginPage;
    productsPage = data.productsPage
    checkOutPage = data.checkOutPage
  });

Cypress.Commands.add('typeTextCommand', (locator, text) => {
  cy.get(locator).should('be.visible').type(text);
})

Cypress.Commands.add('login', (username, password) => {
  cy.get(loginPage.usernameInput).should('be.visible').type(username);

  cy.get(loginPage.passwordInput).should('be.visible').type(password);

  cy.get(loginPage.loginButton).should('be.visible').click();
})
})