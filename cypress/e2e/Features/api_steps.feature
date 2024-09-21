Feature: Teste de API

  Scenario: Verificar a resposta da API
    Given que eu faço uma requisição GET para "/api/produtos"
    Then a resposta deve ter um status 200
    And a resposta deve conter "Produto"