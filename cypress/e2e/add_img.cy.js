describe('Add img', () => {
    it('successfully adds photo', () => {
        cy.visit('/')
        cy.get('.submitPhotoForm > input:first').type('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg')
        cy.get('#descriptionInput').type('autumn road')
        cy.contains('Submit').click()
        cy.get('li:last > img').should('have.attr', 'src', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg')
    })
})