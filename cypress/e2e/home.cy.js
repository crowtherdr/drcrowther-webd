// Basic Cypress E2E test example

describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('Crowther'); // Adjust to match a visible string on your homepage
  });
});
