declare global {
	namespace Cypress {
		interface Chainable {
			getByCy: typeof getByCy
		}
	}
}

/**
 * gets element using data-cy selector
 * @param input data-cy attribute value
 * @example
 * // this command
 * cy.getByCy('header')
 * // will select this element
 * <div data-cy="header">
 * </div>
 *
 */

export const getByCy = (input: string): Cypress.Chainable => {
	cy.get(`[data-cy=${input}]`)
}
