/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as clientsFunc from '../pages/clientspage'
import * as newclientsFunc from '../pages/newclientspage'
import * as targets from '../targets/targets'

//test suite for Clients
describe('Testsuite for navigation',function(){
    beforeEach(() => { //det här görs innan varje testfall 
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 
    afterEach(() => { //det här görs efter varje testfall 
        overviewFuncs.logOut(cy)
        indexFuncs.checkIndexPage(cy)
    }) 
    //test case Create Client 
        it('Create Client', function(){
            indexFuncs.validLogin(cy, targets.user1, targets.pw1)  //Loggar in 
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToClientsPage(cy)
            clientsFunc.checkClientsPage(cy) //on clientspage
            clientsFunc.navigateCreateClient(cy)
            newclientsFunc.checkNewClientsPage(cy) //on new clientspage 
            newclientsFunc.enterUser(cy, targets.randomname,targets.randomemail,targets.randomtele)
            newclientsFunc.ClickSaveNewClient(cy)
            clientsFunc.checkClientsPage(cy)
            cy.contains(targets.randomname) 
        })

    //delete one client
        it('Delete Client', function(){
            indexFuncs.validLogin(cy, targets.user1, targets.pw1)  //Loggar in 
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToClientsPage(cy)
            clientsFunc.checkClientsPage(cy) //on clientspage
            clientsFunc.navigateCreateClient(cy)
            newclientsFunc.checkNewClientsPage(cy) //on new clientspage 
            newclientsFunc.enterUser(cy, targets.randomname, targets.randomemail,targets.randomtele)
            newclientsFunc.ClickSaveNewClient(cy)
            clientsFunc.checkClientsPage(cy)
            cy.contains(targets.randomname) 
            clientsFunc.open1ClientSubMenu(cy) //Deleting the first client... making sure i can delete a client. But not the one I created.... 
            clientsFunc.delete1Client(cy)
        })

    })