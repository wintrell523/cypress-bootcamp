/// <reference types="cypress" />

let boardId

beforeEach(() => {
	cy.request({
		method: 'POST',
		url: '/api/boards',
		body: {
			name: 'new board',
		},
	}).then(board => {
		boardId = board.body.id
	})
})

it('otvorenie vytvoreného boardu', () => {
	cy.visit(`/board/${boardId}`)
})
