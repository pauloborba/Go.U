Feature: Melhor hora
    Como um usuário da aplicação
    Eu desejo poder consultar o horário mais conveniente para chegar um local para que meu tempo seja melhor gasto.

     Cenário: Cancelamento Melhor Hora Marcada
        Given: Eu estou na página de “Melhor Hora”.
        And: Eu consigo ver uma hora marcada pelo usuario "Guilherme" no estabelecimento "RU" das "11" e "30" ate "12" e "30"
        When: Eu cancelo a hora marcada.
        Then: Eu não consigo mais ver a hora que foi removida.
