/// <reference types="Cypress"/>

describe('Post User Request', () => {
    let accessToken = '4294c204576358809645fcec8a33c81c880f3d2f465adfb51a9320a585c9c002'
    var randomText
    var testEmail
    it('Create User Test', () => {
        cy.fixture("createUser").then((payload)=>{
            var pattern = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqestuvwxyz"
            for (let index = 0; index < 1; index++) {
                randomText+= pattern.charAt(Math.floor(Math.random()*pattern.length))
                testEmail = randomText+'@gmail.com'
                cy.request({
                    method: 'Post',
                    url: 'https://gorest.co.in/public/v1/users',
                    headers:{
                        'Authorization': 'Bearer ' + accessToken
                    },
                    body:{
                        "name":payload.name,
                        "gender":payload.gender,
                        "email":testEmail,
                        "status":payload.status 
                    }
                }).then((res)=>{
                    // cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(201)
                    expect(res.body.data).has.property("name",payload.name)
                    expect(res.body.data).has.property("gender",payload.gender)
                    expect(res.body.data).has.property("email",testEmail)
                }) 
            }
        })
    })
});