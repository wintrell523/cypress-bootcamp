/// <reference types="cypress" />

const addBoard = input => {
	cy.get('[data-cy="create-board"]').click()

	cy.get('[data-cy=new-board-input]').type(`${input}{enter}`)
}

it('typescript', () => {
	cy.visit('/')

	addBoard('hello world')
})
