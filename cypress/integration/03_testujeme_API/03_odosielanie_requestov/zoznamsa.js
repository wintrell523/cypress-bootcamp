/// <reference types="cypress" />

beforeEach(() => {
	// cy.request("POST", "/api/reset");
})

// úloha #1: vytvor si board cez api
it('vytvorenie boardu cez api', () => {
	cy.visit('/')

	cy.request('POST', '/api/boards', {
		name: 'api board',
	})
})

// úloha #2: vytvor si list cez api. venuj špeciálnu pozornosť tomu, ktoré atribúty requestu sú povinné
it('vytvorenie listu cez api', () => {
	cy.visit('/board/64012942307') // pridaj si adresu svojho boardu
	cy.request({
		method: 'POST',
		url: '/lists',
		body: {
			boardId: 64012942307, // povinný údaj
			title: 'to do',
		},
	})
})

// úloha #3: vytvor si task cez api
it('vytvorenie tasku cez api', () => {
	cy.visit('/board/64012942307') // pridaj si adresu svojho boardu

	cy.request({
		method: 'POST',
		url: '/tasks',
		body: {
			boardId: 64012942307, // povinný údaj
			listId: 76110903810, // povinný údaj
			title: 'buy milk',
		},
	})
})

// úloha #4: premenuj board pomocou api
it.only('premenovanie boardu cez api', () => {
	cy.request({
		method: 'PATCH',
		url: '/lists/76110903810',
		body: {
			title: 'task list',
		},
	})

	cy.visit('/')
})

// úloha #5: vymaž board pomocou api
it('premenovanie boardu cez api', () => {
	// TODO nefunguje
	cy.request({
		method: 'DELETE',
		url: '/boards/64012942307',
	})

	cy.visit('/')
})
