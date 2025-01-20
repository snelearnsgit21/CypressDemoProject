describe('Sauce Labs Login Feature', ()=>{
    it('Login to Sauce Labs and verify page header once logged in', ()=>{
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.screenshot();
        cy.get('[class="header_label"] [class="app_logo"]').should('have.text','Swag Labs');
    })
})