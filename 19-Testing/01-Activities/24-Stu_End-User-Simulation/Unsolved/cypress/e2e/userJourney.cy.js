// TODO: Write a comment about what the purpose of this userJourney.cy.js is for.
//// TODO: This file tests the user journey through the application, 
//ensuring users can navigate between pages and interact with the features, starting with the home page.
describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("A user can arrive at the home page where other's thoughts are displayed on the screen", () => {
    cy.visit('http://localhost:3000/');
  }
);

  it("A user can add text to the tech form and should add the content to the page", () => {
    // TODO: Write a comment about what this particular test case looks to accomplish.
    // TODO: Makes sure that a user can interact with the tech form by
    // adding text inputs for thoughts and name, submitting the form, and verifying 
    // that the submitted content is displayed on the page within the card elements.
    cy.get('form div textarea').type('My thoughts about Cypress!');
    cy.get('form div').eq(1).children().eq(0).type('Paulie!');
    cy.get('form div').eq(2).children().eq(0).click();
    cy.get('.card .card-body').should(($el) => {
      const cards = $el.map((i, el) => {
        return Cypress.$(el).attr('card-body');
      });
      cards.each((i, cardNames) => {
        expect(cardNames).to('be.visible');
      })
    });
  });

  it('A user can click on the join discussion button and navigate to a Comments page', () => {
    // TODO: Write a comment about what this particular test case looks to accomplish.
    // TODO: Verifies that a user can navigate to the Comments page 
    // clicks the "Join Discussion" button on a specific card and verifies the URL updates correctly to include '/thoughts'.
    cy.get('.card').eq(1).children().eq(2).click();
    cy.location('pathname').should('include', '/thoughts')
  });

});
