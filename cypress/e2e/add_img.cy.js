// describe('Add img', () => {
//     it('successfully adds photo', () => {
//         cy.visit('/')
//         cy.get('.submitPhotoForm > input:first').type('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg')
//         cy.get('#descriptionInput').type('autumn road')
//         cy.contains('Submit').click()
//         //cy.get('form').submit()
//         cy.get('li:last > img').should('have.attr', 'src', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg')
//     })
// })

describe('form', () => {
    it('is validated', () => {
        cy.visit('/')
        // cy.get('button').click()
        cy.get('.submitPhotoForm').within(() => {
            // both elements are invalid
            cy.get('input:invalid').should('have.length', 2)
            
            cy.log('**enter the url**')
            cy.get('#urlInput').type('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg')
            cy.get('input:invalid').should('have.length', 1)

            cy.log('**enter description**')
            cy.get('#descriptionInput').type('road')
            cy.get('input:invalid').should('have.length', 0)
            cy.get('input:valid').should('have.length', 2)
        })
        
    })
})