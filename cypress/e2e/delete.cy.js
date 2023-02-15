describe('delete button', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('deletes last photo', () => {   
        let count 
        cy.get('body').within(() => {
            cy.get('.likesContainer').then(($number) => {
                count = $number.length
            })
        
            cy.log("*** count obtained is *** " + count)

            cy.get('.deleteBtn:last').click()
            cy.get('.swal-button--delete').click()
            
            cy.get('.likesContainer').then(($newCount) => {
                expect($newCount.length).to.below(count)  
            })
        })
    })
})