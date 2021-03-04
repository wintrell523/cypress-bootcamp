// úloha #1: nainštaluj si cypress-file-upload plugin a napíš
// test na upload obrázku do tasku. malé upozornenie - naša aplikácia používa
// knižnicu, ktorá schováva html tag <input type="file"> ten je však elementom
// ktorý si potrebuješ označiť pred uploadnutím súboru. Bonus: skús pre novinštalovaný
// plugin zaregistrovať typescript typy. návod ako na to nájdeš v dokumentáci

// TODO co s tim tagem input type="file" ??
// FIXME slo kliknout jednou, podruhe uz ne
it('upload súboru', () => {
	cy.visit('/board/59857112668')

	cy.get('[data-cy="task-title"]').eq(0).click()

	cy.get('.dropzone-custom-content').attachFile('cypressLogo.png', {
		subjectType: 'drag-n-drop',
	})
})
