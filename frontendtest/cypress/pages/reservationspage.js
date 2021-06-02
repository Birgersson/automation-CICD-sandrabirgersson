/// <reference types="cypress" /> 
//elements
const navBackLink = 'a.btn:nth-child(1)'
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const contentToConfirm = 'Reservations'


//functions
function checkReservationsPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
    cy.contains(contentToConfirm)
}
function navigateBack(cy){
    cy.get(navBackLink).click()
}
//exports
module.exports = {
    navigateBack,
    checkReservationsPage
}