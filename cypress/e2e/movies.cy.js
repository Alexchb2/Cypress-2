const sets = require('../fixtures/seats.json')
const user = require('../fixtures/user.json')
const text = require('../fixtures/text.json')

describe('movie selection screen', () => {

  it('shows schedule for 7 days', () => {
    cy.visit('/')

    cy.get('.page-nav__day').should('have.length', 7)
  })

  sets.forEach((current) => {
    it('reserves tickets', () => {
      cy.visit('/')
  
      cy.get('.page-nav__day').eq(3).click()
      cy.get('.movie').contains('21:00').click()
        current.data.forEach((seat) => {
          cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
        })
    })
  })
  
  it('Buy tickets', () => {
    cy.visit('/admin/')
    cy.login(user.email, user.password)
    cy.get(text.testHall).then(($el) => $el.textContent).should('have.text','Логан');
    cy.get(text.testHall).invoke('text').then((text) => {
      cy.visit("qamid.tmweb.ru");
      cy.get('.page-nav__day').eq(3).click() 
      cy.get(text.testHall).should('have.text', text);
    })
    sets.forEach((current) => {
        cy.visit('/')
    
        cy.get('.page-nav__day').eq(3).click()
        cy.get('.movie').contains('21:00').click()
          current.data.forEach((seat) => {
            cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
          })
      })
  })
})