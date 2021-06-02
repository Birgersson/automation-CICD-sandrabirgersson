/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as clientsFunc from '../pages/clientspage'
import * as newclientsFunc from '../pages/newclientspage'
import * as targets from '../targets/targets'
import faker from 'faker'

//test suite for fajer??
describe('Testsuite for navigation',function(){
    beforeEach(() => { //det här görs innan varje testfall 
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 


            //TEST
            it('test faker', function(){
                indexFuncs.enterUserAndPwOnIndexPage(cy, faker.name.firstName(), targets.pw1)

    })
})