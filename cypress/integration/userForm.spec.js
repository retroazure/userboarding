describe('Form inputs', () => {
    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000');
        cy.url().should('include', 'localhost');
    })

    it('button is disabled', ()=> {
        cy.get('button.submit')
        .should('be.disabled');
    })

    it('can type a username', ()=>{
        cy.get('.input-username').type("Tomas Costa").should('have.value',"Tomas Costa")
    })

    it('can type an Email', ()=>{
        cy.get('.input-email').type("tomascosta@outlook.com");
    })

    it('can type a password', ()=>{
        cy.get('input[name=password]').type("passwordtest");
    })

    it('can check the checkbox', ()=>{
        cy.get('.terms').check()
    })

    it('can submit', ()=>{
        cy.get('button.submit').should('not.be.disabled');
    })

})

describe('Form validation', () => {
    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000');
        cy.url().should('include', 'localhost');
    })

    it('username is empty', ()=> {
        cy.get('.input-username').should('have.value',"")
    })
    it('email is empty', ()=> {
        cy.get('.input-email').should('have.value',"")
    })
    it('password is empty', ()=> {
        cy.get('input[name=password]').should('have.value',"")
    })
    it('checkbox is unchecked', ()=>{
        cy.get('.terms').uncheck();
    })
})

describe('Submitting and deleting users', () => {

    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000');
        cy.url().should('include', 'localhost');
    })

    it('button is disabled', ()=> {
        cy.get('button.submit')
        .should('be.disabled');
    })

    it('can type a username', ()=>{
        cy.get('.input-username').type("Tomas Costa").should('have.value',"Tomas Costa")
    })

    it('can type an Email', ()=>{
        cy.get('.input-email').type("tomascosta@outlook.com");
    })

    it('can type a password', ()=>{
        cy.get('input[name=password]').type("passwordtest");
    })

    it('can check the checkbox', ()=>{
        cy.get('.terms').check()
    })

    it('can submit', ()=>{
        cy.get('button.submit').should('not.be.disabled');
    })

    it('submits users', ()=>{
        cy.get('button.submit').should('not.be.disabled').click();
    })
})

