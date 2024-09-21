import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que acesso na página de Login", () => {
    cy.visit('https://advantageonlineshopping.com');
});

When("defino meu usuário e senha", () => {
    const userData = Cypress.env('userData');

    // Verifique se os dados do usuário estão definidos
    cy.log('Username:', userData.username);
    cy.log('Password:', userData.password);

    cy.get('#menuUserLink').click();
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(userData.username);
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type(userData.password);
    cy.get('#sign_in_btn').click();
});

Then("tenho sucesso no login", () => {
    cy.get('.logo > a').should('be.visible');
});