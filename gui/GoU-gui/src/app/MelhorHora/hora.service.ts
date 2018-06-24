import { Hora } from './hora';

export class HoraService {
  horas: Hora[] = [];
  gravar(hora: Hora): Hora {
     this.horas.push(hora);
  }
}