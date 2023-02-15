describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Gallery')

    cy.get('ul li:first > img').click().get('.photoDescription')

    cy.get('.photoDescription').contains('morning')

    // cy.click('.photoDescription').get('ul li:first > img')
  })
})

