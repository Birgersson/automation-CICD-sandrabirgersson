/// <reference types="cypress" /> 

//elements
const indexPageTitle = 'Testers Hotel'
const userNameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const navLogin = '.btn'
const user = 'user'
const pw = 'pw'
const contentToConfirm = 'Login'

//actions
function checkIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
    cy.contains(contentToConfirm)
}

function validLogin(cy, user, pw){
    cy.get(':nth-child(1) > input').type(user)  //lägg in usernametextfield.... osv... 
    cy.get(':nth-child(2) > input').type(pw)
    cy.get(navLogin).click()
}
function enterUserAndPwOnIndexPage(cy, user, pw){
    cy.get(':nth-child(1) > input').type(user)  
    cy.get(':nth-child(2) > input').type(pw)
    cy.get(navLogin).click()
}

//Exports
module.exports = {
    checkIndexPage,
    validLogin,
    enterUserAndPwOnIndexPage
}