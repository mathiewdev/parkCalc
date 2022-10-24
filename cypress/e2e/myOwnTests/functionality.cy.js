/// <reference types="cypress" />

describe ('Functionality Tests', () => {


    //is there an issue with reloading the page every time for each test and not checking cumulative tests
    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')

    })    

    it('landed on the right page', () => {
        //cy.visit('https://www.shino.de/parkcalc/')

        cy.contains('PARKING COST CALCULATOR').should('exist')

    })

    it('calculate button was clicked', () => {    
        // click 'Calculate' button 
        // no custom attribute reference for button, but there is no other 'submit' type on the page
        cy.get('[type = submit]')
            .click().should('exist')
    })        


    //array.forEach(element => {
    it('checked parking type drop down options', () => {
        // select all option values present in parking lot selection
        //selection isn't changing on the screen?
        //can you beforeEach the get element of ParkingLot?
        // iterate through list of values compared to list of correct values to reduce monotony of these 

        //select Valet parking
        cy.get('select[id=ParkingLot]').select('Valet')
        cy.get('select option:selected')
            .invoke('text').should('eq', 'Valet Parking')

        //select Short term parking
        cy.get('select[id=ParkingLot]').select('Short')
        cy.get('select option:selected')
            .invoke('text').should('eq', 'Short-Term Parking')

        //select Economy parking
        cy.get('select[id=ParkingLot]').select('Economy')
        cy.get('select option:selected')
            .invoke('text').should('eq', 'Economy Parking')

        //select Long-Term garage parking
        cy.get('select[id=ParkingLot]').select('Long-Garage')
        cy.get('select option:selected')
            .invoke('text').should('eq', 'Long-Term Garage Parking')

        //select long term surface parking
        cy.get('select[id=ParkingLot]').select('Long-Surface')
        cy.get('select option:selected')
            .invoke('text').should('eq', 'Long-Term Surface Parking')    

    })  

        /* 
            - do i need to test deleting existing text in date field
            - does running the text entry test followed by the date selection test have any negative impact
            - should i chain all the calendar tests together instead of seperating them
        */

    it('deleted and typed into entry date field and confirmed value', () => {        
        //delete default value
        //type into entry date field
        //fails without deleting text since 'MM/DD/YYYY' is also in field
        cy.get('[id=StartingDate]')
            .clear().invoke('val').should('eq', '')
        cy.get('[id=StartingDate]')
            .type('02/11/2000').invoke('val').should('eq', '02/11/2000')

    })

    it('clicked entry calendar icon and confirmed field population with selected date', () => {
        //click calendar icon and produce required popup
        //select date from required calendar popup
        //populated date field with calendar selection
        cy.get('a').first()
        //this isn't good practice (brittle test) but I couldn't find another way to seperate the two 'a' elements
            //.click()

            //cypress is unable to handle multiple windows/tabs -- not sure how to interact with second window
            //use 'contains' to look for 'winMain' and 'StartingDate'

    })

    it('typed into entry time field and confirmed value', () => {
        //type into entry time field
        //doesn't delete current text
        //fails with 'have value' since '12:00' is also in field
        //delete existing text?

        cy.get('[id=StartingDate]')
            .clear().invoke('val').should('eq', '')
        cy.get('[id=StartingDate]')
            .type('1:00').invoke('val').should('eq', '1:00')

    })

    it('selected entry radio options', () => {
        //needs to select one and confirm the other is deselected
        cy.get('[name=StartingTimeAMPM][value=AM]')
            .check()
                .should('be.checked').and('have.value', 'AM')
        cy.get('[name=StartingTimeAMPM][value=PM]')
            .check()
                .should('be.checked').and('have.value', 'PM')
    

    })

    it('typed into return date field and confirmed value', () => {
        //type into return date field
        //doesn't delete current text
        //fails with 'have value' since 'MM/DD/YYYY' is also in field
        //delete existing text?
        cy.get('[id=LeavingDate]')
            .clear().invoke('val').should('eq', '')
        cy.get('[id=LeavingDate]')
            .type('02/12/2000').invoke('val').should('eq', '02/12/2000')

    })    

    it('clicked return calendar icon and confirmed field population with selected date', () => {
        //click calendar icon and produce required popup
        //select date from required calendar popup
        //populated date field with calendar selection 
        //cypress is unable to handle multiple windows/tabs -- not sure how to interact with second window
        //use 'contains' to look for 'winMain' and 'LeavingDate'

    })

    it.only('typed into return time field and confirmed value', () => {
        //type into entry time field
        //doesn't delete current text
        //fails with 'have value' since '12:00' is also in field
        //delete existing text?
        cy.get('[id=LeavingDate]')
            .clear().invoke('val').should('eq', '')
        cy.get('[id=LeavingDate]')
            .type('1:00').invoke('val').should('eq', '1:00')

    })

    it('selected both return radio options', () => {
        //confirm selection of both am and pm radio options
        cy.get('[name=LeavingTimeAMPM][value=AM]')
            .check()
                .should('be.checked').and('have.value', 'AM')
        cy.get('[name=LeavingTimeAMPM][value=PM]')
            .check()
                .should('be.checked').and('have.value', 'PM')
    })

        //radio selector use .check
    
    
})