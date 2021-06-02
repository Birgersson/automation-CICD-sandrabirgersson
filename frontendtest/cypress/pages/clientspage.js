/// <reference types="cypress" /> 
import * as targets from '../targets/targets'

//elements
const navBackLink = ':nth-child(3) > .btn'
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const contentToConfirm = 'Clients'
const navCreateClient = 'a.btn:nth-child(2)'
const name = targets.name
const email = targets.email
const tele = targets.tele
const clientSubMenu = ':nth-child(1) > .action > img' //for user 1... not too smart. 
const navdeleteClient = '.menu > a:nth-child(2)'


//functions
function checkClientsPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
    cy.contains(contentToConfirm)
}
function navigateBack(cy){
    cy.get(navBackLink).click()
}
function navigateCreateClient(cy){
    cy.get(navCreateClient).click()
}
function verifyUser(cy){ //verifies there is a user with this name, but not that its a specific user though.... 
    cy.contains(name)
    cy.contains(email)
    cy.contains(tele)
}
function open1ClientSubMenu(cy){
    cy.get(clientSubMenu).click()
}
function delete1Client(cy){
    cy.get(navdeleteClient).click()
}
//exports
module.exports = {
    navigateBack,
    checkClientsPage,
    navigateCreateClient,
    verifyUser,
    open1ClientSubMenu,
    delete1Client
}
