import {Agendamento} from '../gui/GoU-gui/src/app/Agendamento/agendamento';

export class NovoAgendamento {
  agendamentos: Agendamento[] = [];

  criar(agendamento: Agendamento): Agendamento {
    var result = null;
    if(!this.agendamentos.find(a => a.data == agendamento.data)){
      if(!this.agendamentos.find(a => a.hora == agendamento.hora)){
        result = new Agendamento();
        result.copyFrom(agendamento);
        this.agendamentos.push(result);  
      }
    }
      
    return result;
  }

 

  atualizar(agendamento: Agendamento): Agendamento {
    var result: Agendamento = this.agendamentos.find(a => a.usuario == agendamento.usuario);
    if (result) result.copyFrom(agendamento);
    return result;
  }

  getAgendamentos(): Agendamento[] {
    return this.agendamentos;
  }
}
