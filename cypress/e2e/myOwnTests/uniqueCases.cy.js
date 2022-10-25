/// <reference types="cypress" />

/*
        - unacceptable input should throw error, not time and cost computation
            - letters in date and time fields
                - manual entry
                - non removal of existing letter values in date field
        - improper date and time formats should throw error
            - both fields with default text and formatted date after it
            - no '/' between mmddyyyy, time not including ':', time not in proper 24/12 hr format (not sure which one)
            - one field with proper date and other with improper date should throw error
                - default text still in field and date added onto it 
                -
        - leave before entry date should throw error
        - entry and leave fields are exactly the same should ____
        - proper date in one field and text in the other
        - improper date proper time field
        - improper time proper date field
    */

describe ('Unacceptable input data', () => {

    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')
    })

    it('')

})