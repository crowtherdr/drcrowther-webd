describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Crother') // Adjust to match a visible string on your homepage
  })
})
