describe('Recursive function check', () => {
    it('Recursive function', () => {
        const recursive = (commandFN, checkFN) =>{
            let val = commandFN()
            cy.log("The value is"+ val)
            if (checkFN(val)) {
                cy.log("Got it")
                return    
            }else{
            recursive(commandFN,checkFN)
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