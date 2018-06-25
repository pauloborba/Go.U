Feature: Agendamentos
        Como um usuário da aplicação
        Eu desejo poder marcar horários com os negócios registrados para que eu possa melhor organizar minhas visitas a tais locais.

    Cenário: Novo Agendamento com Sucesso
        Given Eu estou na página de Agendamento do negócio "X"
        Given O horário de "12:00" no dia "26/04" está livre.
        When Eu faço uma reserva para "4 pessoas" no horário de "12:00" no dia "26/04".
        Then Eu recebo uma mensagem de "Reserva feita com sucesso"
        Then O agendamento realizado para o negócio "X" para "4 pessoas" no horário de "12:00" no dia "26/04" pode ser visto na lista de Meus Agendamentos.

    Cenário: Novo Agendamento com Falha
        Given Eu estou na página de Agendamento do negócio "X"
        Given O horário de "12:00" no dia "26/04" já foi preenchido.
        When Eu faço uma reserva para "4 pessoas" no horário de "12:00" no dia "26/04".
        Then Eu recebo uma mensagem de "Horário não disponível, se possível, tente um dos horários disponíveis".

    Cenário: Cancelar agendamento
        Given Existe um agendamento para o negócio "X" para o horário de "12:00" no dia "26/04".
        Given Eu estou na página de Meus Agendamentos.
        When Eu cancelo a reserva para o horário de "12:00" no dia "26/04".
        Then Eu recebo uma mensagem de "Reserva Cancelada com sucesso"
        Then A lista de Meus Agendamentos está vazia.

    Cenário: Pesquisar Agendamentos por negócios
        Given Existe um agendamento para o negócio "X" para o horário de "12:00" no dia "26/04".
        Given Existe um agendamento para o negócio "Y" para o horário de "17:00" no dia "21/04".
        Given Eu estou na página de Meus Agendamentos.
        When Eu pesquiso por negócio "Y".
        Then Eu posso ver meu agendamento para o negócio "Y" para o horário de "17:00" no dia "21/04".
