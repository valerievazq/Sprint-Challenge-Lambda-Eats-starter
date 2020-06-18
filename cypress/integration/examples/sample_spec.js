describe("Name Test", function () {
  it("Explain what it does", function () {
    // actions and assertions go here
  });
});

{
  ("baseUrl");
  ("http://localhost:3000/");
}

beforeEach(function () {
  cy.visit("http://localhost:3000/pizza");
});

describe("Checking for errors", function () {
  it("no mistakes", function () {
    cy.get("#name")
      .type("Can I type here")
      .should("have.value", "Can I type here");
    cy.get("#size").select("medium").should("have.value", "medium");
    cy.contains("Submit").click({ force: true });
    cy.get('[type="checkbox"]').check();
    cy.get('[type="radio"]').check();
  });
});
