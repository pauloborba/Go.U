import { Component } from '@angular/core';
import { Hora } from './hora';
import { HoraService } from './hora.service';

@Component({
  selector: 'hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent  {
  title = 'hora';
  constructor(private horaService: HoraService) {}
  hora: Hora = {user: "", local: "", hi: 10, mi: 0, hf: 11, mf: 0};
  horas: Hora[] = [];

  gravar(a: Hora): void {
     if (this.horaService.gravar(a)) {
        this.horas.push(a);
        this.hora = {user: "", local: "", hi: 10, mi: 0, hf: 11, mf: 0};
     }
     else {
        this.hora = {user: "", local: "", hi: 10, mi: 0, hf: 11, mf: 0};
        alert("Por favor, digite um horário válido!");
     }
     
}

}

