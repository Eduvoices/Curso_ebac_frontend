/// <reference types="cypress" />

describe('Teste para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Teste da Silva')
        cy.get('input[type="email"]').type('exemplo@exemplo.com')
        cy.get('input[type="tel"]').type('99 123456789')
        cy.get('.adicionar').click()
        cy.get('h2').should('contain.text', '4 contatos na agenda')
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').last().click()
        cy.get('h2').should('contain.text', '3 contatos na agenda')
    })

    it('Editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Felipe Lacerda')
        cy.get('.alterar').first().click()
        cy.get('.sc-iAEyYk > :nth-child(2)').should('contain', 'Felipe Lacerda')
    })
})