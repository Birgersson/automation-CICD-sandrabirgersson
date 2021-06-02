/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as targets from '../targets/targets'

//test suite for Login
describe('Testsuite for Login',function(){

    beforeEach(() => { //det här görs innan varje testfall 
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 
    
    //test case 1.1 Log in as user 1
        it('Login', function(){
            indexFuncs.validLogin(cy, targets.user1, targets.pw1, 'Tester Hotel Overview') 
            overviewFuncs.checkTesterHotelOverviewPage(cy) 
            overviewFuncs.logOut(cy,'Login')
        })

    //test case 1.3 Log in as unauthorized user 
        it('Login Error', function(){
            indexFuncs.enterUserAndPwOnIndexPage(cy, targets.badusername,targets.badpw,'Bad username or password') //skickar in felaktig user. icke inloggad. 
          })
    })