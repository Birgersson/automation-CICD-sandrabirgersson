/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as roomsFuncs from '../pages/roomspage'
import * as clientsFunc from '../pages/clientspage'
import * as reservationFuncs from '../pages/reservationspage'
import * as billsFuncs from '../pages/billspage'
import * as targets from '../targets/targets'

//test suite for Navigation
describe('Testsuite for navigation',function(){
    beforeEach(() => { //det här görs innan varje testfall 
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 
    afterEach(() => { //det här görs efter varje testfall 
        overviewFuncs.logOut(cy)
        indexFuncs.checkIndexPage(cy)
    }) 
    //test case 3.1 Navigation 
        it('Navigate the site using View and Back-buttons', function(){
            indexFuncs.validLogin(cy, targets.user1, targets.pw1)  //Logga in 
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToClientsPage(cy)
            clientsFunc.checkClientsPage(cy)
            clientsFunc.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToReservationsPage(cy)
            reservationFuncs.checkReservationsPage(cy)
            reservationFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToRoomsPage(cy)
            roomsFuncs.checkRoomsPage(cy)
            roomsFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToBillsPage(cy)
            billsFuncs.checkBillsPage(cy)
            billsFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
        })
    })
    

