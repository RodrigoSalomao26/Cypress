Feature: Inserir mais de 10 item no carrinho

  Scenario: Inserir mais de 10 item no carrinho
    Given que acesso ao carrinho
    When clico para inserir o produto mais de 10 vezes
    Then verifico a quantidade é limitada em 10