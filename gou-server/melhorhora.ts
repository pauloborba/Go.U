import {Hora} from '../gui/GoU-gui/src/app/MelhorHora/hora';

export class MelhorHora {
  horas: Hora[] = [];

  gravar(hora: Hora): Hora {
     var result = null;

     if (this.dataInvalida(hora)) {
                 this.horas.push(hora);
                 result = hora;       
     }
     return result;
  }

  remove(hora) {
      var result = null;
      var removeindex = this.horas.findIndex(i => 
        (i.user === hora.user) && 
        (i.local === hora.local) && 
        (i.hi == hora.hi) && 
        (i.mi == hora.mi) &&
        (i.hf == hora.hf) &&
        (i.mf == hora.mf)
        );
      if (removeindex > -1) {
          result = this.horas.splice(removeindex, 1);
        }
      return result;
  }

  isAmPm(hour: number): boolean {
    var result = false;
    if ((!isNaN(hour)) && (hour>=0 && hour<=24)) {
      result = true;
    }
    return result;
  }

  isMin(hour: number): boolean {
    var result = false;
    if ((!isNaN(hour)) && (hour>=0 && hour<=60)) {
      result = true;
    }
    return result;
  }

  dataInvalida(hour: Hora): boolean {
    var result = false;
    if (this.isAmPm(hour.hf) && this.isAmPm(hour.hi) && this.isMin(hour.mi) && this.isMin(hour.mf)) {

      if((hour.hf>hour.hi) || (hour.hf>=hour.hi) && (hour.mf>hour.mi)) {
        result = true;
      }     
    }
    return result;
  }

  

  getHoras(): Hora[] {
    return this.horas;
  }
}