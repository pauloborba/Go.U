import { Hora } from './hora';

export class HoraService {
  horas: Hora[] = [];
  gravar(hora: Hora): Hora {
     var result = null;

     if ((!isNaN(hora.hf)) && (!isNaN(hora.hi)) && (!isNaN(hora.mi)) && (!isNaN(hora.mf))) {
      if (hora.hf>=0 && hora.hi>=0 && hora.mf>=0 && hora.mi>=0) {
                 this.horas.push(hora);
                 result = hora;       
      }
     }
     return result;
  }
}