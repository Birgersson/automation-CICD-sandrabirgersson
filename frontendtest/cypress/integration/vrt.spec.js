/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as roomsFuncs from '../pages/roomspage'
import * as clientsFunc from '../pages/clientspage'
import * as billsFuncs from '../pages/billspage'
import * as targets from '../targets/targets'

//test suite for Visual regression testing, with screenshots
describe('Testsuite for navigation',function(){
    beforeEach(() => {  
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 
    afterEach(() => { 
        overviewFuncs.logOut(cy)
       indexFuncs.checkIndexPage(cy)
    })  
        it('Navigate the site taking snapshots', function(){
            cy.get('.btn').contains('Login')
            cy.percySnapshot('indexPage-Snapshot') //1 index page
            
            indexFuncs.validLogin(cy, targets.user1, targets.pw1)  
            overviewFuncs.checkTesterHotelOverviewPage(cy) //overviewpage
            cy.contains('Reservations')
            cy.percySnapshot('OverviewPage-Snapshot') //2 oevrview page

            overviewFuncs.navigateToClientsPage(cy) //clientspage
            clientsFunc.checkClientsPage(cy)
            cy.get(':nth-child(1) > .icon')
            cy.get('h2 > .btn').click()
            cy.get('#app > :nth-child(2)')
            cy.percySnapshot('NewClientsPage-Snapshot') //3 new client page
            cy.get('[href="/clients"]').click()
            clientsFunc.navigateBack(cy)

            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToBillsPage(cy)
            billsFuncs.checkBillsPage(cy)
            cy.get('h2 > .btn').click()
            cy.get('#app > :nth-child(2)')
            cy.percySnapshot('NewBillsPage-Snapshot') //4 new bill page
            cy.get('[href="/bills"]').click()
            billsFuncs.checkBillsPage(cy)
            billsFuncs.navigateBack(cy)
            
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToRoomsPage(cy)
            roomsFuncs.checkRoomsPage(cy)
            cy.get('h2 > .btn').click() 
            cy.get('#app > :nth-child(2)')
            cy.percySnapshot('NewRoomPage-Snapshot') //5 new room page
            cy.get('[href="/rooms"]').click()
            roomsFuncs.checkRoomsPage(cy)
            cy.get(':nth-child(3) > .btn').click()
            overviewFuncs.checkTesterHotelOverviewPage(cy)
        
        })
    })