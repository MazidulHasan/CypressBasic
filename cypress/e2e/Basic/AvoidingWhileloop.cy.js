describe('Avoiding while loop', () => {
    it('Using Recursion', () => {
        const numberCheck = ()=>{
            /*To generate a number that is a whole number rounded down between
            1 and 10 */
            const val = Math.floor(Math.random() * 10) + 1 //the + 1 makes it so its not 0
            cy.log("Actual value is : "+val)
            if (val === 8) {
                cy.log('**Got 8**')
            }
            else{
                numberCheck()
            }
        }   
        
        numberCheck()
    });
});