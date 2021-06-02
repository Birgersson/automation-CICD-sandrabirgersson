/// <reference types="cypress" /> 


//elements
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const contentToConfirm = 'New Client'
const navSaveClient = 'a.btn:nth-child(2)'
const nameField = ':nth-child(1) > input' 
const emailField = ':nth-child(2) > input'
const teleField = ':nth-child(3) > input'


//functions
function checkNewClientsPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
    cy.contains(contentToConfirm)
}

function enterUser(cy, name, email, tele){
    cy.get(nameField).type(name)  
    cy.get(emailField).type(email)
    cy.get(teleField).type(tele)
}
function ClickSaveNewClient(cy){
    cy.get(navSaveClient).click()
}
//exports
module.exports = {
    ClickSaveNewClient,
    enterUser,
    checkNewClientsPage
}
