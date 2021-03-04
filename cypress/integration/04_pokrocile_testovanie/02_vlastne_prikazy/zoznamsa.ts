// úloha #1: vytvor si vlastný custom command pre vytvorenie boardu
it('vytvorenie boardu', () => {
	cy.visit('/')
	cy.createBoard('my new board made through custom command')
})

// úloha #2: vytvor si vlastný custom command pre login pomocou api
it('login pomocou api', () => {})
