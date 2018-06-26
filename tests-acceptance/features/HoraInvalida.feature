Feature: Melhor hora
    Como um usuário da aplicação
    Eu desejo poder consultar o horário mais conveniente para chegar um local para que meu tempo seja melhor gasto.

    
    Cenário: Melhor Hora Inválida
        Given: Estou na Página de "Melhor Hora"
        When: Preencho os campos de melhor horário com estabelecimento "RU" pelo usuário "Guilherme" das "11" e "30" até "27" e "78".
        Then: Nenhum horario é registrado.