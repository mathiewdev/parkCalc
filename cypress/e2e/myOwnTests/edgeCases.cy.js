/// <reference types="cypress" />

describe ('Edge Case Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')
    })

    /*
        - unacceptable input should throw error, not time and cost computation
            - letters in date and time fields
                - manual entry
                - non removal of existing letter values in date field
        - improper date and time formats should throw error
            - no '/' between mmddyyyy, time not including ':', time not in proper 24/12 hr format (not sure which one)
        - leave before entry date should throw error
        - entry and leave fields are exactly the same should ____
        - 
    */

})