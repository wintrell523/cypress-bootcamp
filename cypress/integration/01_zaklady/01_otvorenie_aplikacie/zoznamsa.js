/// <reference types="cypress" />

it('otvorenie trello boardu', () => {
	/*

  úloha #1: vyskúšaj si otvorenie stránky pomocou príkazu .visit()

  úloha #2: vytvor si nový trello board a pomocou príkazu .visit() si otvor url tohto boardu

  úloha #3: pozri sa do baseUrl v súbore cypress.json. skús prísť na to, akým
  spôsobom môžeš tento parameter využiť. skús si za pomoci tohto parametra otvoriť domovskú stránku,
  alebo trello board z úlohy #2

  */

	// visits / of base URL (in cypress.json)
	cy.visit('/')
})

it('open trello board', () => {
	// opens base URL (set in cypress.json) with /board/<boardID> appended
	cy.visit('/board/78682246982')
})
