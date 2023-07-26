export function expectHeader() {
  cy.get('h1').should('be.visible');
}
