describe('Recursive function check 2', () => {
    it('Recursive function 2', () => {
        const recursive = (commandFN, checkFN, k = 1) =>{
            cy.log(`iteratio **${k}**`)
            let val = commandFN()
            cy.log("The value is"+ val)
            if (checkFN(val)) {
                cy.log("Got it")
                return    
            }else{
            recursive(commandFN,checkFN, k+1)
            }
        }

        recursive(randomNumberGeneratorL,(n)=> n==7)
    });

    it.only('Recursive function with limit', () => {
        const recursive = (commandFN, checkFN, limit = 3) =>{
            if (limit < 0) {
                throw new Error('Recursion limit reached')
            }

            cy.log(`iteratio **${limit}**`)
            let val = commandFN()
            cy.log("The value is"+ val)
            if (checkFN(val)) {
                cy.log("Got it")
                return    
            }else{
            recursive(commandFN,checkFN, limit -1 )
            }
        }

        recursive(randomNumberGeneratorL,(n)=> n==7)
    });
});

function randomNumberGeneratorL() {
    const val = Math.floor(Math.random() * 10) + 1
    cy.log("Actual value is : "+val)
    return val;
}