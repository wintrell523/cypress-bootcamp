/// <reference types="cypress" />

// ⚠️ pôvodný beforeEach blok som vymazal, aby boli riešenia úloh lepšie zrozumiteľné

it('vytvorenie tasku', () => {
	cy.intercept('POST', '/api/tasks').as('addTask')

	cy.visit('/board/76547003119')

	cy.get('[data-cy="new-task"]').click()

	cy.get('[data-cy="task-input"]').type('new task{enter}')

	cy.wait('@addTask').its('response.statusCode').should('eq', 201)

	// úloha #1: vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
	// pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu
})

it('odstránenie zoznamu', () => {
	cy.intercept('DELETE', '/api/lists').as('deleteList')

	cy.visit('/board/76547003119')

	cy.get('[data-cy="list"] .dropdown').click()

	cy.contains('Delete list').click()

	cy.wait('@deleteList')

	// úloha #2: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
	// testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
})

it.only('zaškrtnutie tasku', () => {
	cy.intercept('PATCH', '/api/tasks/*').as('checkTask')

	cy.visit('/board/76547003119')

	cy.get('[data-cy="task-done"]').check()

	cy.wait('@checkTask').then(({ request, response }) => {
		expect(request.body.completed).to.be.true
		expect(response.statusCode).to.eq(200)
	})

	// úloha #3: pomocou testu si zaškrtni task v zozname a odsleduj si request,
	// ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
	// skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu
})
