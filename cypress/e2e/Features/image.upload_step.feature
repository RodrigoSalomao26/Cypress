Feature: Atualizar Imagem do Produto

  Scenario: Atualizar a imagem de um produto após login
    Given que faço login com as credenciais pré-definidas
    When consulto o produto com o ID {string}
    When faço o upload da nova imagem do produto
    Then a imagem do produto deve ser atualizada corretamente