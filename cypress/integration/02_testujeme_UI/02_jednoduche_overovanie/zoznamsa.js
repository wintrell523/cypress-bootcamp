/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('/board/17586913262') // ⚠️ doplň si adresu svojho boardu
})

// úloha #1: vytvor si nový zoznam (list) a over si, že je viditeľný
it('vytvorenie listu', () => {
	cy.get('[data-cy="add-list"]').click()
	cy.get('[data-cy="add-list-input"]').type('new list{enter}')
	cy.get('[data-cy="list-name"]').should('be.visible')
})

// úloha #2: vytvor si ešte jeden zoznam (list) a over si, že sa na stránke nachádzajú dva
it('overenie počtu listov', () => {
	cy.get('[data-cy="add-list"]').click()
	cy.get('[data-cy="add-list-input"]').type('new list{enter}')
	cy.get('[data-cy="list"]').should('have.length', 2)
})

// úloha #3: začni test s jedným zoznamom na stránke. odstráň ho a potom over, že sa na stránke nenachádza ani jeden
// divy nad sebou : .List > .dropdown > .delete
it('odstránenie listu', () => {
	cy.get('.List .dropdown').click()
})

// úloha #4: začni test s jedným taskom v aplikácii, pomocou testu ho zaškrtni a over si, že je task aj naozaj zaškrtnutý
it('overenie odškrtnutia', () => {
	cy.get('[data-cy="task-done"]').check()
	cy.get('[data-cy="task-done"]').should('be.checked')
})

// úloha #5: začni test s jedným zoznamom v aplikácii. zmeň jeho názov a následne si over, že sa názov naozaj zmenil
it('overenie názvu listu', () => {
	cy.get('[data-cy="list-name"]').clear()
	cy.get('[data-cy="list-name"]').type('changed list')
	cy.get('[data-cy="list-name"]').should('have.value', 'changed list')
})

// úloha #6: vytvor si nový task a over si jeho text
it.only('overenie textu na pridanie tasku (add new task)', () => {
	cy.get('[data-cy="new-task"]').click()
	cy.get('[data-cy="task-input"]').type('Newly created task{enter}')
	cy.get('[data-cy="task-title"]')
		//.eq(1) // element with index 1 (2nd)
		.last() // last created element
		.should('have.text', 'Newly created task')
})
