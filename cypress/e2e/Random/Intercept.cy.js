/// <reference types="Cypress" />

describe('Intercept with cypress examples', () => {
    it('Tetst api with simple intercept', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.intercept({
            path:'/posts'
        }).as('posts')

        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
        
        cy.wait('@posts', {requestTimeout:50000}).then((resp)=>{
            cy.log(JSON.stringify(resp))
            console.log(JSON.stringify(resp))
            // expect(resp.)
        })
    });

    it.only('Mocking intercept test with dynamic fixture', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.intercept('GET','/posts',{fixture:'createUser.json'}).as('anotherPost')
        
        // cy.intercept('GET','/posts',{titalpost:5, name:'naveen'}).as('anotherPost')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
        cy.wait('@anotherPost').then((anotherResp)=>{
            console.log(anotherResp);
        })

    });
});