/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que eu faço uma requisição GET para "/api/produtos"', (endopoint) => {
    cy.request('GET','https://www.advantageonlineshopping.com/catalog/api/v1/products/16').then((response) => {
      as('apiResponse'); // Armazena a resposta da requisição

Then ('Then a resposta deve ter um status 200', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);

})     

 
  Then('a resposta deve conter "Produto"', (content) => {
    cy.get('@apiResponse').its('body').should('include', content);
});
});
});     

    
