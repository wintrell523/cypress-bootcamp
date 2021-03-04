/// <reference types="cypress" />

/*
  ⚠️ vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
  ℹ️ medzi jednotlivými stavmi si budeš musieť aplikáciu vrátiť do pôvodného stavu
  pomocou klávesy F2 si otvor nástroje, ktoré Ti s tým pomôžu
*/

// úloha #1: vytvor si nový zoznam (list) vo svojom boarde
it('vytvorenie nového zoznamu', () => {
	// visit board
	cy.visit('/board/78682246982')

	// get element add-list and click on it
	cy.get('[data-cy="add-list"]').click()

	// get element add-list-input, type 'new list' and press enter
	cy.get('[data-cy="add-list-input"]').type('new list{enter}')
})

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {
	// visit board
	cy.visit('/board/78682246982')

	// get element by class List_addTask and click on it
	// (open field for creating a new task)
	cy.get('.List_addTask').click()

	// get element task-input and type 'new task' into it
	cy.get('[data-cy="task-input"]').type('new task 3')

	// get element add-task (button for adding a task) and click on it
	cy.get('[data-cy="add-task"]').click()
})

// úloha #3: zaškrtni task ako vybavený
it.only('označenie tasku', () => {
	cy.visit('/board/78682246982')

	cy.get('[data-cy="task-done"]').eq(2).check()
})

// úloha #4: odškrtni task ako nevybavený
it('odznačenie tasku', () => {
	cy.get('[data-cy="task-done"]').uncheck()
})
