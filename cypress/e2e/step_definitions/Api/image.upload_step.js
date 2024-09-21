/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userId;
let productId = '16'; // Substitua pelo ID do produto real
let newImageId;

// Passo para fazer login com usuário e senha pré-definidos
Given('que faço login com as credenciais pré-definidas', () => {
  const Username = 'giovana'; // Insira pelo seu e-mail
  const password = '212121Gg'; // Insira sua senha

  cy.request({
    method: 'POST',
    url: 'https://advantageonlineshopping.com/#/',
    body: {
      Username: Username,
      password: password,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    userId = response.body.userId; // Armazena o userId
  });
});

// Passo para consultar o produto
When('consulto o produto com o ID {string}', (id) => {
  cy.request('https://www.advantageonlineshopping.com/catalog/api/v1/products/16')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', id); // Verifica se o ID do produto é o correto
    });
});

// Passo para fazer o upload da nova imagem do produto
When('faço o upload da nova imagem do produto', () => {
  const newImage = 'nova_imagem.png'; // Nome da imagem na pasta fixtures

  cy.fixture(newImage, 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
    const formData = new FormData();
    formData.append('image', blob, 'nova_imagem.png');

    cy.request({
      method: 'PUT',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/16', // Ajuste conforme necessário
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica o status code
      newImageId = response.body.imageId; // Armazena o ID da nova imagem
      expect(newImageId).to.exist; // Verifica se o ID da nova imagem foi retornado
    });
  });
});

// Passo para verificar se a imagem do produto foi atualizada corretamente
Then('a imagem do produto deve ser atualizada corretamente', () => {
  cy.request('https://www.advantageonlineshopping.com/catalog/api/v1/products/16')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.imageId).to.eq(newImageId); // Verifica se o ID da imagem atualizada é o mesmo
    });
});

