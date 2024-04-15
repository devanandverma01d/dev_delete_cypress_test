///<reference types='Cypress' />
///<reference types='cypress-xpath' />


Cypress.Commands.add("login",()=>{
    cy.visit('')
    cy.xpath('(//span[normalize-space()="Sign In"])[1]').click() // click on sign-in menu
    cy.xpath('//input[@formcontrolname="email"]').type(Cypress.env('email'))  // type email
    cy.xpath('//input[@formcontrolname="password"]').type(Cypress.env('password'))  // type password
    cy.xpath('//span[normalize-space()="Login"]').click() // click on login button
})
Cypress.Commands.add("navigateTo",(menu)=>{
    cy.xpath('//a[@class="bars"]').click({force:true}) 
    cy.xpath(`//span[normalize-space()='${menu}']`).click({force:true})
})