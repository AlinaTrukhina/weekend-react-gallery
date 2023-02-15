describe('likes counter', () => {
    it('goes up when liked', () => {
        cy.visit('/')
        
        cy.get('.likesContainer:last').within(() => {
            
            cy.get('.likeCount:last').then(($count1) => {
                const favCount1 = parseInt($count1.text())
                
                cy.get('.likeBtn').click()
                cy.get('.likeCount:last').then(($fav) => {
                    expect(parseInt($fav.text())).to.above(favCount1)
                })
            })
        })
    })
})