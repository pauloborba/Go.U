Feature: Favoritos
    Como um usuário da aplicação
    Eu desejo salvar negócios para que eu possa mais facilmente o encontrar depois.

    Cenário: Adicionando Negócios ao Favoritos.

        Given: Estou na pagina do negócio “x”
        And: Ele não está marcado como favorito.
        When: Eu o marco como favorito. 
        Then: Eu vejo o negócio “x” como favorito.

    Cenário: Remover Negócios ao Favoritos.

        Given: Estou na pagina do negócio “x”
        And: Ele está marcado como favorito.
        When: eu o desmarco como favorito.
        Then: Eu vejo que o negócio “x” não está com favorito.

    Cenário: Visualização dos Negócios favoritos.

        Given: Estou na home page
        And: Eu tenho o negócio “x” marcado como favorito
        And: Eu tenho o negócio “y” marcado como favorito
        And: Eu tenho o negócio “z” marcado como favorito.
        When: Seleciono a opção  de favoritos.
        Then: Eu vejo a lista de favoritos com os negócios “x”, “y” e “z” na lista.


