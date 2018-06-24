import { Hora } from './hora';
import { Injectable } from '@angular/core';

@Injectable()
export class HoraService {
  horas: Hora[] = [];
  gravar(hora: Hora): Hora {
     var result = null;

     if (this.dataInvalida(hora)) {
                 this.horas.push(hora);
                 result = hora;       
     }
     return result;
  }

  isAmPm(hour: number): boolean {
    var result = false;
    if ((!isNaN(hour)) && (hour>=0 && hour<=60)) {
      result = true;
    }
    return result;
  }

  dataInvalida(hour: Hora): boolean {
    var result = false;
    if (this.isAmPm(hour.hf) && this.isAmPm(hour.hi) && this.isAmPm(hour.mi) && this.isAmPm(hour.mf)) {
      result = true;
    }
    return result;
  }

}