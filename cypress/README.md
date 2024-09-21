Teste Inmetrics

Este projeto implementa testes automatizados para o site **Advantage Online Shopping**. Os testes incluem tanto a interface web quanto a API, utilizando BDD com Cucumber e Cypress.

## Tecnologias Utilizadas

- **Cucumber**: Para a escrita de cenários seguindo a metodologia BDD.
- **Cypress**: Framework de testes de integração para aplicações web.

## Tecnologias Utilizadas

- "cypress-cucumber-preprocessor": "^4.3.1"
- "cypress": "^13.14.2",
- "cypress-file-upload": "^5.0.8"

## Para configurar o Ambiente:

Instalar Node.js.
Escolher uma IDE de JavaScript para programar.
Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: npm install
Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:
Para executar os testes via terminal: npx cypress run
Para executar os testes via browser: npx cypress run --browser chrome --no-exit
Para executar os testes via script salvo em package.json: npm run test:chrome