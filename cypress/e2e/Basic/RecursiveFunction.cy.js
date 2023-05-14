describe('Recursive function check', () => {
    it('Recursive function', () => {
        const recursive = (commandFN, checkFN) =>{
            commandFN().then((x)=>{
                if (checkFN(x)) {
                    cy.log("Got it")
                    return    
                }
                recursive(commandFN,checkFN)
            })
        }

        recursive(randomNumberGeneratorL,(n)=> n==7)
    });
});

async function randomNumberGeneratorL() {
    const val = Math.floor(Math.random() * 10) + 1
    cy.log("Actual value is : "+val)
    return val;
}