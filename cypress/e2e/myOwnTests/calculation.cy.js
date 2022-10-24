/// <reference types="cypress" />

describe ('Calculation Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.shino.de/parkcalc/')
    })

    /*
        - fill fields with required test info - parking type, dates/duration
        - submit the form
        - reference calculation output 
            - is the calculated total time accurate?
            - is the final cost accurate based on parking type parameters
        - assert values to calculated total time and to final cost


    */

})