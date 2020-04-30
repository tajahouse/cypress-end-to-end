//describe === context, it === specify, beforeEach

describe("Test our form inputs", function (){
beforeEach(function(){  //This will run the test in this local host for each test
        cy.visit("http://localhost:3000")
    });

    it("first test", function(){
        cy.get('[data-cy="name"]').type("Taja").should("have.value", "Taja");
        cy.get('[data-cy="email"]').type("taja@email.com").should("have.value", "taja@email.com")
        cy.get("textarea").type("I want to help").should("have.value", 'I want to help');
        cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.get("form").submit();
    })

    // it("second it test", function(){
 

    // })

})