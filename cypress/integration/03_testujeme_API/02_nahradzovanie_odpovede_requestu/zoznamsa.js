/// <reference types="cypress" />

it('zoznam dvoch boardov z fixture', () => {
	cy.intercept('GET', '/api/boards', {
		fixture: 'exampleBoard',
	}).as('boardList')

	cy.visit('/')

	// úloha #1: použi súbor twoBoards.json z fixtures foldra, alebo si vytvor vlastný fixture súbor
})

it('žiaden board v zozname', () => {
	cy.intercept('GET', '/api/boards', {
		body: [],
	}).as('emptyBoardList')

	cy.visit('/')

	// úloha #2: skús tentokrát vytvoriť board, no namiesto
	// použitia fixture ju skús nahradiť pomocou atribútu body
})

it('chyba pri vytvoreni tasku', () => {
	cy.intercept('POST', '/api/tasks', {
		forceNetworkError: true,
	}).as('createTasks')

	cy.visit('/board/76547003119')

	cy.get('[data-cy="new-task"]').click()

	cy.get('[data-cy="task-input"]').type('new task{enter}')

	cy.get('#errorMessage').should('be.visible')

	// pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení tasku
})
