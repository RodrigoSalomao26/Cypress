import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import faker from 'faker';

function generateStrongPassword(length = 12) {
    const lowerCase = faker.internet.password(length).replace(/[^a-z]/g, '');
    const upperCase = faker.internet.password(length).replace(/[^A-Z]/g, '');
    const numbers = faker.internet.password(length).replace(/[^0-9]/g, '');
    const specialChars = faker.internet.password(length).replace(/[a-zA-Z0-9]/g, '');

    const passwordArray = [
        lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)),
        upperCase.charAt(Math.floor(Math.random() * upperCase.length)),
        numbers.charAt(Math.floor(Math.random() * numbers.length)),
        specialChars.charAt(Math.floor(Math.random() * specialChars.length)),
    ];

    const remainingLength = length - passwordArray.length;
    const allChars = lowerCase + upperCase + numbers + specialChars;
    for (let i = 0; i < remainingLength; i++) {
        passwordArray.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
    }

    const password = passwordArray.sort(() => Math.random() - 0.5).join('');
    return password;
}

let userData = {};

Given("que acesso o site", () => {
    cy.visit('https://advantageonlineshopping.com');
});

When("defino meu usuário, email e senha", () => {
    const username = `rodrigo_${faker.datatype.number({ min: 1000, max: 9999 })}`;
    const password = generateStrongPassword(12);
    const email = `ro${faker.internet.userName()}@example.com`;

    // Armazenar os dados do usuário
    userData = { username, email, password };

    cy.log('Generated username:', username);
    cy.log('Generated email:', email);
    cy.log('Generated password:', password); // Verifique se a senha é válida

    cy.get('#menuUserLink').click();
    cy.xpath('/html/body/login-modal/div/div/div[3]/a[2]').click();

    // Preencher o formulário
    cy.xpath('//*[@id="formCover"]/div[1]/div[1]/sec-view[1]/div/input').type(username);
    cy.xpath('//*[@id="formCover"]/div[1]/div[1]/sec-view[2]/div/input').type(email);
    
    if (password) {
        cy.xpath('//*[@id="formCover"]/div[1]/div[2]/sec-view[1]/div/input').type(password);
        cy.xpath('//*[@id="formCover"]/div[1]/div[2]/sec-view[2]/div/input').type(password, { force: true });
    } else {
        cy.log('Password is undefined');
    }

    // Aceitar os termos se necessário
    cy.xpath('//*[@id="formCover"]/sec-view/div/input').should('be.visible').check();

    // Clicar no botão de registro
    cy.get('#register_btn').should('be.enabled').click();
});

Then("Valido criação da conta", () => {
    // Verifique se o nome do usuário aparece em tela
    cy.get('//*[@id="menuUserLink"]/span', { timeout: 10000 })
        .should('be.visible')
        .should('contain', userData.username);
});
