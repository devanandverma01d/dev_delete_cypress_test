describe('Test File first',()=>{
    beforeEach(()=>{
        cy.login()
        cy.navigateTo('My Contacts')
    })
    it("TC1- Verify My Contacts URL",()=>{
        cy.url().should('eq','https://consumer.staging.geotoll.com/myaccount/contacts')
        .and('include','myaccount/contacts')
    })
    it('TC2-Verify Add Address Button',()=>{
        cy.xpath('//span[normalize-space()="Add Address"]').click()
    })
})