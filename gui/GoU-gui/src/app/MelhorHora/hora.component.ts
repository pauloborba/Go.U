import { Component } from '@angular/core';

@Component({
  selector: 'hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent  {
  title = 'hora';
  hora: Hora = {user: "", local: "", hi: 10, mi: 0, hf: 11, mf: 0};
}

export class Hora {
  user: string;
  local: string;
  hi;
  mi;
  hf;
  mf;
}