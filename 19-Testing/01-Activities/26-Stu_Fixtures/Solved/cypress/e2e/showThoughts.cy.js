describe('Tech Thoughts Website via Fixtures', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.fixture('thoughts').then((fixture) => {
        cy.intercept('GET', '/api/thought', {
            statusCode: 201,
            body: fixture
        }).as('getThoughts')
    })
});

  it('should display different fixture thoughts on the homepage', () => {
    cy.wait('@getThoughts').then(() => {
        cy.findByText('Jessica').should('be.visible');
        cy.findByText('Paul').should('be.visible');
        cy.findByText('Jack').should('be.visible');
    })
  })
});
