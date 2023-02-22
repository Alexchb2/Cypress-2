const user = require('../fixtures/user.json')

describe('movie selection screen', () => {
 it('valid enter', () => {
    cy.visit('/admin/')
    cy.login(user.email, user.password)
    cy.get('#hall-control > header > h2').should('have.text', 'Управление залами')
  })

  it('invalid enter', () => {
    cy.visit('/admin/')
    cy.login(user.email, user.invalidPassword)
    cy.get("body").should('have.text', 'Ошибка авторизации!')
  })
})