import {Agendamento} from '../gui/GoU-gui/src/app/Agendamento/agendamento';

export class NovoAgendamento {
  agendamentos: Agendamento[] = [];

  criar(agendamento: Agendamento): Agendamento {
    var result = null;
    if(this.vagaOcupada(agendamento)){
      
        result = new Agendamento();
        result.copyFrom(agendamento);
        this.agendamentos.push(result);  
      
    }
      
    return result;
  }

  vagaOcupada(agen : Agendamento): boolean {
    return ((!this.agendamentos.find(a => a.data == agen.data))&&(!this.agendamentos.find(a => a.hora == agen.hora)));
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
