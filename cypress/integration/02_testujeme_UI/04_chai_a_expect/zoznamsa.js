/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('/board/17586913262') // ⚠️ doplň si adresu svojho boardu
})

// ⚠️ pred spustením testov si vytvor napr. štyri tasky

// úloha #1: over všetky text taskov pomocou príkazu .then()
it('texty taskov', () => {
	cy.get('[data-cy="task"]').then(items => {
		for (let i = 0; i < items.length; i++) {
			const item = items[i]
			expect(item).to.contain.text('task')
		}
		//expect(items[0]).to.contain('task')
	})
})

// úloha #2: zaškrtni niektoré z taskov a pomocou príkazu .then a funkcie expect over zaškrtnutie taskov
it.only('zaškrtnutie taskov', () => {
	cy.get('[data-cy="task-done"]').then(tasks => {
		expect(tasks[0]).not.to.be.checked
		expect(tasks[1]).to.be.checked
		expect(tasks[2]).not.to.be.checked
		expect(tasks[3]).to.be.checked
	})
})
