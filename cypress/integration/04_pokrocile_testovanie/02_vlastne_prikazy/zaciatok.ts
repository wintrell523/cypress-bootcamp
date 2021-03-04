it('vytvorenie nového boardu', () => {
	cy.visit('/')

	cy.getByCy('create-board').click()

	cy.get('[data-cy=new-board-input]').type('new board{enter}')
})
