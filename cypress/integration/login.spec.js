/// <reference types="cypress" />



describe('Twitter clone - Login', () => {
    // Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
    // Request Method: GET

  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      hostname: 'res.cloudinary.com'
    }, {
      statusCode: 200,
      fixture: 'sra.jpeg'
    }).as('ibagens')
  });

  it('Ao autenticar email e senha, o usuário será redirecionado para o feed', () => {
    cy.login() 
    cy.visit('/');
    
    cy.get(' nav ul li')
      .should('be.visible')
      .and('have.length', 6)
  })
})