Cypress.Commands.add('login',(username,password)=>{
    cy.get('input[data-test="username"]').type(username);
    cy.log('Entered username');
    cy.get('input[data-test="password"]').type(password);
    cy.log('Entered password');
    cy.get('input[data-test="login-button"]').click();
    cy.log('Clicked on login button');
    cy.contains('div[class="app_logo"]','Swag Labs').should('be.visible');
    cy.log('Swag Labs logo is displayed on home page');
});


Cypress.Commands.add('addRandomProductsToCart',()=>{
    cy
    .get('div[data-test="inventory-item"] button')
    .should('have.length',6)
    .each(($item, $index) => {
        if($index<3){
            cy.get($item).click();
        }
    });
    cy.log('Added 3 random products to cart');
    cy.get('div[id="shopping_cart_container"]').click();
    cy.log("Clicked on Checkout icon");
    cy.contains('span[data-test="title"]','Your Cart').should('be.visible');
});

Cypress.Commands.add('addCheckoutInformation',(userFirstName,userLastName,userPostalCode)=>{
    cy.get('button[data-test="checkout"]').click();
    cy.log('Click on Checkout button');
    cy.get('input[data-test="firstName"]').type(userFirstName);
    cy.get('input[data-test="lastName"]').type(userLastName);
    cy.get('input[data-test="postalCode"]').type(userPostalCode);
    cy.get('input[data-test="continue"]').click();
});

Cypress.Commands.add('completeProductPurchase',()=>{
    cy.get('button[data-test="finish"]').click();
    cy.get('h2[data-test="complete-header"]').should('have.text','Thank you for your order!');
    cy.get('div[data-test="complete-text"]').should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});

Cypress.Commands.add('addProductsToCartBasedOnBudget',budget=>{
    let prices = [];
        
    cy
        .get('[data-test="inventory-item-price"]')
        .each($el=>{
            const price  = parseFloat($el.text().split('$').pop());
            prices.push(price);
            cy.log(`price of the product : ${price}`);
        }).then(()=>{
            cy.log('Sorted prices of the product:', prices.toString()); // Log sorted prices

            ////div[@data-test="inventory-item-price"]/../button[@id="add-to-cart-sauce-labs-bike-light"]
        })
})