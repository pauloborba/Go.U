export class Agendamento {
  usuario: string;
  local: string;
  pessoas: string;
  data: string;
  hora: string;

  constructor(){
    this.usuario = "";
    this.local = "";
    this.pessoas = "";
    this.data = "";
    this.hora = "";
  }

copyFrom(from: Agendamento): void {
    this.usuario = from.usuario;
    this.local = from.local;
    this.pessoas = from.pessoas;
    this.data = from.data;
    this.hora = from.hora;
}
}