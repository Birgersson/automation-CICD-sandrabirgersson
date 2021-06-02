/// <reference types="cypress" /> 

//elements
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const navViewRoomLink = ':nth-child(1) > .btn'
const navViewClientsLink = '.blocks > :nth-child(2) > .btn'
const navViewBillsLink = ':nth-child(3) > .btn'
const navViewReservationsLink = ':nth-child(4) > .btn'
const navLogOut = '.user > .btn'
const contentToConfirm = 'Tester Hotel Overview'

//functions
function checkTesterHotelOverviewPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
    cy.contains(contentToConfirm)
}
function navigateToClientsPage(cy){
    cy.get(navViewClientsLink).click()
}
function navigateToBillsPage(cy){
    cy.get(navViewBillsLink).click()
}
function navigateToReservationsPage(cy){
    cy.get(navViewReservationsLink).click()
}
function navigateToRoomsPage(cy ){
    cy.get(navViewRoomLink).click()
}
function logOut (cy){
    cy.get(navLogOut).click()
}
//exports
module.exports = {
    checkTesterHotelOverviewPage,
    navigateToClientsPage,
    navigateToBillsPage,
    navigateToReservationsPage,
    navigateToRoomsPage,
    logOut

}