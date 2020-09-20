describe('Form inputs', () => {
    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('button is disabled', ()=> {
        cy.get('button.submit')
    })
})

describe('Form validation', () => {
    
})

describe('Submitting and deleting users', () => {
    
})

