// The intention of cy.intercept() is to mock out the network requests

describe('API Requests', () => {

  
    // ! Uncomment during demo of incorrect intercept() usage to force all API responses to not be cached
    // beforeEach(() => {
    //   cy.intercept(
    //     '/api/thought',
    //     { middleware: true },
    //     (req) => {
    //       req.on('before:response', (res) => {
    //         // force all API responses to not be cached
    //         res.headers['cache-control'] = 'no-store'
    //       })
    //     }
    //   )
    // })
  
  
    const mockThoughts = [
      {
        _id: '1',
        thoughtText: 'This is a test thought',
        thoughtAuthor: 'testAuthor',
        createdAt: 'January 1, 2024',
      },
    ];
  
    it('should GET all thoughts on page load', () => {
      cy.intercept('GET', '/api/thought', mockThoughts).as('getThoughts');
      cy.visit('/');
      cy.wait('@getThoughts')
        .its('response.body')
        .should('deep.equal', mockThoughts);
    });
  });
  
  
  // The intention of cy.request() is to be used for checking endpoints on an actual, running server without having to start the front-end application.
  // Similar to what we do in Insomnia
  // describe('API Requests', () => {
  //   it('should GET all thoughts on page load', () => {
  //     cy.visit('https://example.cypress.io')
  //     cy.request('GET', '/api/thought').its('body[0]').should('have.property', 'thoughtText');
  //   });
  // })