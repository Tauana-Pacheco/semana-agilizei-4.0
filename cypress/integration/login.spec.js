/// <reference types="cypress" />



describe('Twitter clone - Login', () => {
  it('Ao autenticar email e senha, o usuário será redirecionado para o feed', () => {

    // Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
    // Request Method: GET

    cy.intercept({
      method: 'GET',
      hostname: 'res.cloudinary.com'
    }, {
      statusCode: 200,
      fixture: 'sra.jpeg'
    }).as('ibagens')

    cy.visit('https://twitter-clone-example.herokuapp.com/');

    cy.get('input[type=email]').type('dasdores@hotmail.com')
    cy.get('input[type=password]').type('Saude#13')
    cy.get('button[type=submit]').click()

    cy.get(' nav ul li')
      .should('be.visible')
      .and('have.length', 6)
  })
})