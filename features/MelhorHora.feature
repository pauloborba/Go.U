Feature: Melhor hora
    Como um usuário da aplicação
    Eu desejo poder consultar o horário mais conveniente para chegar um local para que meu tempo seja melhor gasto.

    Cenário: Cancelamento Melhor Hora Marcada
        Given: Eu estou na página de “Melhor Hora” da local “R.U.”
        When: Eu cancelo a hora marcada.
        Then: Eu recebo uma confirmação do cancelamento.
        And: Eu não consigo mais ver o horário marcado.

    Cenário: Nova Melhor Hora (GUI)
        Given: Eu estou na página de "Melhor Hora"
        When: Preencho os campos de melhor horário com estabelecimento "RU" pelo usuário "Guilherme" das "11:30" até "12:30".
        Then: Eu consigo ver o Melhor Horário adicionado.

    Cenário: Nova Melhor Hora
        Given: Ainda não há uma Melhor Hora Registrada para o estabelecimento "RU" pelo usuário "Guilherme" das "11:30" até "12:30".
        When: É registrado uma nova solicitação de melhor horário no estabelecimento “RU” pelo usuário “Guilherme” das “11:30” até “12:30”
        Then: Melhor Hora do “R.U.” das “11:30” até “12:30” para o usuário “Guilherme” é adicionada com sucesso.

    Cenário: Melhor Hora Inválida
        Given: Estou na Página de "Melhor Hora"
        When: Preencho os campos de melhor horário com estabelecimento "RU" pelo usuário "Guilherme" das "11:30" até "27:78".
        Then: Recebo um alerta de horário inválido.
