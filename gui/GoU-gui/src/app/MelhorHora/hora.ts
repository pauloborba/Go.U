export class Hora {
  user: string;
  local: string;
  hi: number;
  mi: number;
  hf: number;
  mf: number;

  constructor() {
  this.remove();
  }

  remove(): void {
    this.user = "";
    this.local = "";
    this.hi = null;
    this.hf = null;
    this.mi = null;
    this.mf = null;
  }

  clone(): Hora {
    var hora: Hora = new Hora();
    hora.user = this.user;
    hora.local = this.local;
    hora.hi = this.hi;
    hora.hf = this.hf;
    hora.mi = this.mi;
    hora.mf = this.mf;
    return hora;
  }

}