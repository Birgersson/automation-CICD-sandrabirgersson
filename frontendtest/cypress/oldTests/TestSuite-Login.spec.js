/// <reference types="cypress" /> 

//test suite for log in. Dessa tester fungerar, men följer ej kodstandard. Bör utvecklas. 
describe('Regression test suite',function(){
    //test case 1.1
    it('Perform valid login for user 1', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.title().should('include','Hotel')
        cy.get(':nth-child(1) > input').type('tester01')  
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })


    //test case 1.3
    it('Perform login for invalid user', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.title().should('include','Hotel')
        cy.get(':nth-child(1) > input').type('Hello')  //want to generate randomly 
        cy.get(':nth-child(2) > input').type('Hello')
        cy.get('.btn').click()
        cy.contains('Bad username or password')
        cy.get('.router-link-active').click()
    })

})