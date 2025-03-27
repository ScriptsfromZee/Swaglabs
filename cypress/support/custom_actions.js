Cypress.Commands.add('typeTextCommand', (locator, text) => {
  cy.get(locator).type(text)
})

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.typeTextCommand(loginPage.userInput, username)
  cy.wait(2000)
  cy.typeTextCommand(loginPage.passwordInput, password)
  cy.wait(2000)
  cy.get(loginPage.loginButton).click()
})