
  describe('Entrada a pagina principal Renfe', () => {
  
  it('Debe cargar la página oficial de Renfe', () => {
    // 1. Visitar la web con un tiempo de espera extra por si la red va lenta
    cy.visit('https://www.renfe.com/es/es', { timeout: 30000 })

    // 2. Aceptar cookies - Usamos un selector más fuerte
    // Buscamos el botón y le damos permiso para hacer clic aunque esté "tapado"
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click({ force: true })

    cy.wait(2000)// 3. Esperar un momento a que desaparezca el cartel

    // 4. Verificar que el menú principal se ha cargado correctamente
    cy.contains('Menú', { timeout: 10000 }).should('be.visible')
  })
})



