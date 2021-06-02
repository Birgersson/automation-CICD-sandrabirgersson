/// <reference types="cypress" /> 
//elements
const navBackLink = ':nth-child(3) > .btn'
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const contentToConfirm = 'Rooms'

//functions
function checkRoomsPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
    cy.contains(contentToConfirm)
}
function navigateBack(cy){
    cy.get(navBackLink).click()
}
//exports
module.exports = {
    navigateBack,
    checkRoomsPage
}