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

 describe('edge cases', () =>{
    

 })       




describe ('Unacceptable input data', () => {

    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')
    })

    it('didnt remove default MM/DD/YYYY from both date fields', () => {
        cy.get('[id=StartingDate]')
            .type('02/11/2000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .type('02/11/2000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

    it('didnt remove default MM/DD/YYYY from entry date field', () => {
        cy.get('[id=StartingDate]')
            
            .type('02/11/2000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .clear()
            .type('02/11/2000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

    it('didnt remove default MM/DD/YYYY from return date field', () => {
        cy.get('[id=StartingDate]')
            .clear()
            .type('02/11/2000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .type('02/11/2000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

    it('didnt remove default MM/DD/YYYY from entry date field, improper format in entry', () => {
        cy.get('[id=StartingDate]')
            .type('02112000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .clear()
            .type('02/11/2000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

    it('letters in entry field', () => {
        cy.get('[id=StartingDate]')
            .clear()
            .type('aaaaaaaa')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .clear()
            .type('02/11/2000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

    it('letters in return field', () => {
        //passes, but error says it's because leaving date is before starting
        cy.get('[id=StartingDate]')
            .clear()
            .type('02/11/2000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('1:00')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .clear()
            .type('aaaaaaaa')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('1:30')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        //fails to get because it doesn't exist, ie test fails
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')

    })

})




describe('Improper format', () => {
    
    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')
    })

    it ('no : in time field', () => {
        //either error or 30 minute calculation, 30 hours
        cy.get('select[id=ParkingLot]').select('Valet')
        cy.get('[id=StartingDate]')
            .clear()
            .type('02112000')
        cy.get('[id=StartingTime]')
            .clear()
            .type('100')
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()    
        cy.get('[id=LeavingDate]')
            .clear()
            .type('02112000')
        cy.get('[id=LeavingTime]')
            .clear()
            .type('130')
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
        cy.get('[type = submit]')
            .click()
        cy.get('td[class=SubHead]>b')
            .should('contain', 'ERROR!')
    })

})