Feature: Locais (Usuário)
        Como um usuário da aplicação
        Eu desejo poder pesquisar por negócios para que eu possa encontrar informações sobre eles.

    Cenário: Buscar Local com Sucesso

        Given: Existe um local com o endereço “X”.
        And: Eu estou na página “Procurar Locais”.
        When: Eu pesquiso o endereço “X”.
        Then: Eu posso ver a página do local “London Club”.


    Cenário: Buscar Local sem Sucesso

        Given: Não existe um local com o endereço “Y”.
        And: Eu estou na página “Procurar Locais”.
        When: Eu pesquiso o endereço “Y”.
        Then: Eu recebo uma mensagem de “Local não existente”.
