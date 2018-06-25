import { NovoAgendamento } from '../novoagendamento';
import {Agendamento} from '../../gui/GoU-gui/src/app/Agendamento/agendamento';

describe("Novo Agendamento Teste", () => {
  var novoagendamento: NovoAgendamento;

  beforeEach(() => novoagendamento = new NovoAgendamento())

  it("inicializa-se vazio", () => {
    expect(melhorhora.getAgendamentos().length).toBe(0);
  })

  it("Cria um agendamento completo", () => {
    var agendamento: Agendamento = new Agendamento();
    agendamento.usuario = "Lucas";
    agendamento.local = "RU";
    agendamento.pessoas = "2";
    agendamento.data = "02/09";
    agendamento.hora = "13:00"
    novoagendamento.criar(agendamento);

    expect(melhorhora.getAgendamentos().length).toBe(1);
    agendamento = novoagendamento.getAgendamentos()[0];
    expect(agendamento.usuario).toBe("Lucas");
    expect(agendamento.local).toBe("RU");
    expect(agendamento.pessoas).toBe("2");
    expect(agendamento.data).toBe("02/09");
    expect(agendamento.hora).toBe("13:00");
    expect(hora.mf).toBe("30");

  })

})