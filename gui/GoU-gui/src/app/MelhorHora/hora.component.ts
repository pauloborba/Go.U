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
  hora: Hora = new Hora();
  horas: Hora[] = [];

  gravar(a: Hora): void {
     if (this.horaService.gravar(a)) {
        this.horas.push(a);
        this.hora = new Hora();
     }
     else {
        alert("Por favor, digite um horário válido!");
     }
     
}

}

