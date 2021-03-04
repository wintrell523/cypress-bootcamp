/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('/board/9798760230') // ⚠️ doplň si adresu svojho boardu

	cy.intercept('**/api/tasks').as('createTask')
	cy.intercept('**/api/lists/**').as('deleteList')
})

it('vytvorenie tasku', () => {
	// úloha #1: vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
	// pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

	cy.get('[data-cy="new-task"]').click()
	cy.get('[data-cy="task-input"]').type('new task{enter}')

	cy.wait('@createTask').then(response => {
		expect(response.response.statusCode).to.eq(201)
	})
})

it.only('odstránenie zoznamu', () => {
	// úloha #2: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
	// testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
	cy.get('.List .dropdown').eq(1).click()
	cy.get('.dropdown > #myDropdown > .delete').click()
	cy.wait('@deleteList')

	//TODO dopsat klik na dropdown ?????
})

it('zaškrtnutie tasku', () => {
	// úloha #3: pomocou testu si zaškrtni task v zozname a odsleduj si request,
	// ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
	// skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu
})
