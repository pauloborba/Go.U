import { MelhorHora } from '../melhorhora';
import {Hora} from '../../gui/GoU-gui/src/app/MelhorHora/hora';;

describe("Melhor Hora Teste", () => {
  var melhorhora: MelhorHora;

  beforeEach(() => melhorhora = new MelhorHora())

  it("inicializa-se vazio", () => {
    expect(melhorhora.getHoras().length).toBe(0);
  })

  it("cadastra melhor hora com todos os campos preenchidos", () => {
    var hora: Hora = new Hora();
    hora.user = "Guilherme";
    hora.local = "RU";
    hora.hi = "10";
    hora.mi = "30";
    hora.hf = "12";
    hora.mf = "30";
    melhorhora.gravar(hora);

    expect(melhorhora.getHoras().length).toBe(1);
    hora = melhorhora.getHoras()[0];
    expect(hora.user).toBe("Guilherme");
    expect(hora.local).toBe("RU");
    expect(hora.hi).toBe("10");
    expect(hora.mi).toBe("30");
    expect(hora.hf).toBe("12");
    expect(hora.mf).toBe("30");
  })

   it("não aceita hora invalida", () => {
    var hora: Hora = new Hora();
    hora.user = "Guilherme";
    hora.local = "RU";
    hora.hi = "10";
    hora.mi = "30";
    hora.hf = "12";
    hora.mf = "30";
    melhorhora.gravar(hora);

    expect(melhorhora.getHoras().length).toBe(0);
})

})