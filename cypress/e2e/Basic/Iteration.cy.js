describe('Iteration of the function', () => {
    it('Iteation check', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('#page-container.button').each(($button) => {
            //cy.wrap command is used to create a Cypress chainable object from a value
            //cy.invoke command invoke a function on the subject yielded by a previous Cypress command
            cy.wrap($button).click().invoke('text').should('eq','Test text')

        })
    })

    it.only('Stop iteration',()=>{
        const fruits = ['apples','bananas','oranges','pears']
        cy.wrap(fruits).each((fruit,k)=>{

            if (k ==2) {
                return false
            }
            console.log('fruit',fruit);
        })
    })
})