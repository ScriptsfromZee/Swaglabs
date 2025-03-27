describe("Login Test Suite", () => {
  let loginPage;
  let productsPage;
  let checkOutPage;
  
  beforeEach(() => {
    cy.fixture('elementsLocator').then((data) => {
      loginPage = data.loginPage;
      productsPage = data.productsPage
      checkOutPage = data.checkOutPage
    });
  });

  it("Succesful Login and Shopping", () => {
    cy.log("Test 1 has started");

    // Navigate to the Swag Labs URL
    cy.visit("/");
    cy.log("Navigated to URL");

    // Fill in username and password 
    cy.login('standard_user','secret_sauce')
    
    cy.log("User has signed in successfully");

    // Add items to cart
    cy.get(productsPage.addTocart).eq(0).click();

    // Ensure the second item is visible before clicking
    cy.get(productsPage.addTocart).eq(1).should('be.visible').click();

    // Scroll to and verify item visibility
    cy.contains("Test.allTheThings").scrollIntoView().should("be.visible");

    // Add another item to cart
    cy.get(productsPage.addTocart).eq(3).should('be.visible').click();

    cy.log("User has successfully filled cart");

    // Click on the cart icon after ensuring it's visible
    cy.get(productsPage.clickCart).should('be.visible').click();

    // Proceed to checkout after ensuring the button is visible
    cy.get(checkOutPage.clickCheckout).should('be.visible').click();

    // Fill out checkout information
    cy.get(checkOutPage.firstName).type("David");

    // Fill out last name and postal code after ensuring visibility
    cy.get(checkOutPage.lastName).should('be.visible').type("Janette");

    cy.get(checkOutPage.postalcode).should('be.visible').type("500101");

    // Submit the checkout form
    cy.get(checkOutPage.submitButton).click();

    // Return to cart after ensuring visibility
    cy.get('a[class="btn_action cart_button"]').should('be.visible').click();

    cy.log("User has successfully placed an order");
  });

  it("Login with locked out user", () => {
    cy.log("This user should not be able to log in");

    // Navigate to the Swag Labs URL
    cy.visit("/");
    cy.log("Navigated to URL");

    // Fill in username and password 
    cy.login("locked_out_user",'secret_sauce')
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')

  })

});
