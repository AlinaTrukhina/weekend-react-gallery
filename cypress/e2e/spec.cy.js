describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('My first test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(false)
  })
})