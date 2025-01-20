describe('Sauce Labs : Complete Checkout Flow', () => {
    let username;
    let password;
    let userFirstName;
    let userLastName;
    let userPostalCode;

    before(() => {
        cy.visit('/');

        cy.log('Visited sauce labs website');

        cy.fixture('loginData.json').then(loginData => {
            username = loginData.username;
            password = loginData.password;
        });

        cy.fixture('userCheckoutInfo.json').then(checkoutInfo => {
            userFirstName = checkoutInfo.firstName;
            userLastName = checkoutInfo.lastName;
            userPostalCode = checkoutInfo.postalCode;
        });
    });

    it("Login to sauce labs application > Add 3 random products to cart > Complete Product Purchase",()=>{
        cy
            .login(username,password)
            .addRandomProductsToCart()
            .addCheckoutInformation(userFirstName,userLastName,userPostalCode)
            .completeProductPurchase()
            .screenshot();   
    });
});