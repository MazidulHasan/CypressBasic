/// <reference types="Cypress"/>

describe('Oauth feature apis', () => {
    let access_token = ''
    let user_id = ''

    before('Generating token',() => {
        cy.request({
            method:'POST',
            url: 'http://coop.apps.symfonycasts.com/token',
            form: true,
            body:{
                "client_id": "CypressApp007",
                "client_secret": "22063cb525d77a9c526ba536f80eb03c",
                "grant_type" : "client_credentials"
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            cy.log(response.body.access_token)
            access_token = response.body.access_token
            
            cy.request({
                method:'GET',
                url: 'http://coop.apps.symfonycasts.com/api/me',
                headers:{
                    'Authorization': 'Bearer '+ access_token
                }
            }).then((getResponse)=>{
                cy.log(JSON.stringify(getResponse))
                cy.log("user id :"+getResponse.body.id)
                user_id = getResponse.body.id
            })
        });
    });
    it('Unlock the barn', () => {
        cy.request({
            method:"POST",
            url: 'http://coop.apps.symfonycasts.com/api/'+user_id+'/barn-unlock',
            headers:{
                'Authorization': 'Bearer '+ access_token
            }
        }).then((barnResponse)=>{
            expect(barnResponse.status).to.equal(200)
            cy.log(JSON.stringify(barnResponse))
            cy.log(barnResponse.body.action)
            expect(barnResponse.body).has.property("action","barn-unlock")
        })
    })

    it('Collect Eggs', () => {
        cy.request({
            method:"POST",
            url: 'http://coop.apps.symfonycasts.com/api/'+user_id+'/eggs-collect',
            headers:{
                'Authorization': 'Bearer '+ access_token
            }
        }).then((barnResponse)=>{
            expect(barnResponse.status).to.equal(200)
            cy.log(JSON.stringify(barnResponse))
            cy.log(barnResponse.body.action)
            expect(barnResponse.body).has.property("action","eggs-collect")
        })
    })
});