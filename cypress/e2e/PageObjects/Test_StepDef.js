import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the registration page', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  cy.on('uncaught:exception', (err, runnable) => {
    cy.log('Caught an uncaught exception:', err);
    return false;
  });
});

When('I fill in the registration form with valid data', () => {
  cy.get('#firstname').type('anh');
  cy.get('#lastname').type('De');
  cy.get('#email_address').type('icffrXytye@mailinator.com');
  cy.get('#password').type('Password123');
  cy.get('#password-confirmation').type('Password123');
});

When('I submit the registration form', () => {
  cy.get('button[title="Create an Account"]').click();
});

Then('I should see a success message', () => {
  cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  cy.wait(5000);
});

When('I log out', () => {
  cy.scrollTo('top');
  cy.xpath('/html/body/div[2]/header/div[2]').click();
  cy.xpath("//div[@class='panel header']//button[@type='button']").click();
  cy.xpath("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']").click();
  cy.wait(5000);
});

When('I open the login page', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
});

When('I fill in the login form with valid data', () => {
  cy.get('#email').type('icffrXytye@mailinator.com');
  cy.wait(30000);
  cy.get('#pass').type('Password123');
});

When('I submit the login form', () => {
  cy.xpath("//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]").click();
  cy.wait(5000);
});

Then('I should be logged in successfully', () => {
  cy.xpath("//div[@class='panel header']//span[@class='logged-in'][normalize-space()='Welcome, anh De!']")
    .should('exist')
    .and('contain', "Welcome, anh De!");
});
