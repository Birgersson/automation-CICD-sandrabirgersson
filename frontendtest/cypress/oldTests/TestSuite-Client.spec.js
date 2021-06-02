/// <reference types="cypress" /> 

//test suite for Client. Detta test fungerar men följer ej kodstandard. 
describe('Regression test suite',function(){
    //test case 2.1
    it('Create client', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.title().should('include','Hotel')
        cy.get(':nth-child(1) > input').type('tester01')  
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('div.block:nth-child(2) > a:nth-child(3)').click() //navigate to client view
        cy.contains('Clients')
        //add some more assertions here! in the clients view
        cy.get('h2 > .btn').click() //create client
        cy.contains('New Client')
        //click save
        cy.get('.blue').click()
        cy.contains('must be set')
        //Enter name
        cy.get(':nth-child(1) > input').type('Sandra') //Want to make random

        //enter email
        cy.get(':nth-child(2) > input').type('test@test.se') //Want to make random
        //Enter tele
        cy.get(':nth-child(3) > input').type('0101231234')//Want to make random
        //click save
        cy.get('.blue').click()
        //Shouold be on client view. 
        cy.contains('Clients')
        // click ... on the far right on newly created client. 
        //oklart om denna duger. den klickar på tredje. förutsätter att det finns två 
        //och att jag precis skapade den tredje. 
        cy.get('div.card:nth-child(3) > div:nth-child(3) > img:nth-child(1)').click()
        //in dropdown click delete
        cy.get('.menu > a:nth-child(2)').click()
        //log out
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
})
