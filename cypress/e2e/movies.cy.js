
describe('movie selection screen', () => {

  it('shows schedule for 7 days', () => {
    cy.visit('/')

    cy.get('.page-nav__day').should('have.length', 7)
  })

  it('shows schedule for 3 movie', () => {
    cy.visit('/')

    cy.get('body > main > section').should('have.length', 3)
  })

})