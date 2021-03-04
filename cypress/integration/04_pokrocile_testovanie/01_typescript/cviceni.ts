// nastaveni vlastniho typu s konkretnimi moznostmi
type Options = 'new board' | 'newer board'

// definovani funkce
// narozdil od javascriptu se muzou veci typovat - napr. input: string
// moznost definovani konkretnich hodnot - input: 'new board' | 'newer board'
// pouziti typu Options definovaneho vyse:
const addBoard = (input: Options) => {
	cy.get('[data-cy="create-board"]').click()

	cy.get('[data-cy=new-board-input]').type(`${input}{enter}`)
}

it('typescript', () => {
	cy.visit('/')

	//zavolani funkce
	addBoard('new board')
})
