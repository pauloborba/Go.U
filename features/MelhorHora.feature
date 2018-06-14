Feature: Melhor hora
    Como um usuário da aplicação
    Eu desejo poder consultar o horário mais conveniente para chegar um local para que meu tempo seja melhor gasto.

    Cenário: Cancelamento Melhor Hora Marcada
        Given: Eu estou na página de “Melhor Hora” da local “R.U.”
        When: Eu cancelo a hora marcada.
        And: Eu confirmo o cancelamento.
        Then: Eu recebo uma confirmação do cancelamento.
        And: Eu não consigo mais ver o horário marcado.

    Cenário: Melhor Hora Notificação (GUI)
        Given: Eu havia marcado um Melhor Horário das “11:30” até “12:30” no “R.U.”
        When: Estou no intervalo “11:30” até “12:30” horas.
        Then: Eu recebo uma notificação de Melhor Horário.

    Cenário: Nova Melhor Hora
        Given: Existe o estabelecimento “R.U.” que está aberto das “11:00” até “13:00”
        When: É registrado uma nova solicitação de melhor horário no estabelecimento “R.U.” pelo usuário “Guilherme” das “11:30” até “12:30”
        Then: Melhor Hora do “R.U.” das “11:30” até “12:30” para o usuário “Guilherme” é adicionada com sucesso.

    Cenário: Notificação Melhor Hora
        Given: Existe uma Melhor Hora do “R.U.” das “11:30” até “12:30” para o usuário “Guilherme”.
        When: Algoritmo de Melhor Hora no intervalo “11:30” até “12:30” indica a melhor hora.
        Then: Notificação de Melhor Hora é enviada para o usuário.
