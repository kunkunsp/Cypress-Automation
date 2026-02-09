
describe('Prueba Automatizar booking', () => {
  
  it('passes', () => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.booking.com/index.es.html?aid=2336990;label=es-es-booking-desktop-xaLk3uPEoptOsx9tuemKGwS652804041542:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-13273066:lp9198402:li:dec:dm;ws=&gad_source=1&gad_campaignid=19856801934&gclid=EAIaIQobChMIo8v8leKAkQMV-cZEBx1aARVNEAAYASAAEgJ0FvD_BwE&chal_t=1763643006677&force_referer=https%3A%2F%2Fwww.google.com%2F')
  })
it("verify cookies", () => {
    cy.visit('https://www.booking.com/index.es.html?aid=2336990;label=es-es-booking-desktop-xaLk3uPEoptOsx9tuemKGwS652804041542:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-13273066:lp9198402:li:dec:dm;ws=&gad_source=1&gad_campaignid=19856801934&gclid=EAIaIQobChMIo8v8leKAkQMV-cZEBx1aARVNEAAYASAAEgJ0FvD_BwE&chal_t=1763643006677&force_referer=https%3A%2F%2Fwww.google.com%2F')
    cy.clearCookies({log: true})
    cy.clearLocalStorage('you item', {log: true})   
  })

    

})