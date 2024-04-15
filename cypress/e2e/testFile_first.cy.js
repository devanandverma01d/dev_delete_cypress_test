describe('Test File first',()=>{
    beforeEach(()=>{
        cy.login()
        cy.navigateTo('Home')
    })
    it("TC1- Verify Home URL",()=>{
        cy.url().should('eq','https://consumer.staging.geotoll.com/myaccount/home')
        .and('include','myaccount/home')
    })
    it('TC2-Verify Text',()=>{
        cy.xpath('//h5[normalize-space()="Consumer Info"]').contains('Consumer Info')
    })
})