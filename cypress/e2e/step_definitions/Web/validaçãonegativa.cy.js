import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que acesso ao carrinho", () => {
          cy.visit('https://advantageonlineshopping.com')
          cy.get('#menuUserLink').click()
          cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('giovana')
          cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('212121Gg')
          cy.get('#sign_in_btn').click()
          cy.get('#mobileSearch > .roboto-medium').type('tablet');
          cy.get('svg[data-ng-click="goToCategoryPage()"]').click()
          cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
          
 When("clico para inserir o produto mais de 10 vezes",()=>{
    for (let i = 0; i < 11; i++) {
        cy.get('.plus').click(); // Clica no elemento
      }
        });
        

});
               
        
        
      
