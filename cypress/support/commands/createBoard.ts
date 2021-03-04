declare global {
	namespace Cypress {
		interface Chainable {
			createBoard: typeof createBoard
		}
	}
}

/**
 * creates board using input as name of the board
 * @param input board name
 * @example
 * // this command
 * cy.createBoard('newBoard')
 * // will execute this command:
 * cy.get('[data-cy=new-board-input]').type('newBoard{enter}')
 *
 */

export const createBoard = (input: string) => {
	cy.getByCy('create-board').click()
	cy.get('[data-cy=new-board-input]').type(`${input}{enter}`)
}
