describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1').should('contain', 'Listado de Productos');

    cy.get('button').eq(1).click();

    cy.get('h3').should('contain', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');

    cy.contains('Añadir').click();

    cy.get('h1').should('contain', 'Listado de Productos');

    cy.get('.icon').click();

    cy.get('td').eq(1).should('contain', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
  });
});