describe('Tech Thoughts Website via Fixtures', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    // TODO: Add an intercept that will replace the GET request by targeting the fixtures rather than making a full API request. 
    // Intercept the GET request to replace it with fixture data


    cy.fixture('thought').then((fixture)) =>{

    cy.intercept('GET', '/api/thoughts', { statusCode, 201: 'thoughts.json' }).as('getThoughts');

  });

  it('should display different fixture thoughts on the homepage', () => {
    // TODO: Add tests to check if the users from the fixtures are visible

    cy.wait('@getThoughts');

    // Verify the thoughts and authors from the fixture appear on the homepage
    cy.fixture('thoughts.json').then((thoughts) => {
      thoughts.forEach((thought) => {
        // Check that the thought content is visible
        cy.contains(thought.thought).should('be.visible');

        // Check that the author's name is visible
        cy.contains(thought.author).should('be.visible');
      });
    });

  })
});
