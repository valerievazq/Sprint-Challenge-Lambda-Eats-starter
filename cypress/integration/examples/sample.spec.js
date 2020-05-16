describe('Name Test', function () {

    it('Explain what it does', function() {

        // actions and assertions go here
    })
})

{
    'baseUrl': 'http://localhost:3000/'
}
beforeEach(function () {
    cy.visit('http://localhost:3000/pizza');
})

    describe('Test our form inputs', function () {
        it('adds text to name input', function () {
            cy.get("#size")
                .select("medium")
                .should("have.value", "medium")
                
            // cy.get('[type="radio"]')
            //     .check('marinara')
            // cy.get('[type="checkbox"]')
            //     .check("pepperoni")
            //     .should("be.checked")
    
            // cy.get('["textarea"]')
            //     .type({ force: true },'some info')
            //     
              
    
            cy.contains("Submit")
                .click({ force: true });
    
        });
    });
    })
})