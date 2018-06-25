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
  horaerro: boolean = false;

  gravar(a: Hora): void {
    this.horaService.gravar(a)
      .then(ab => {
        if(ab) {
          this.horas.push(ab);
          this.hora = new Hora();
        } else {
          alert("Por favor, digite um horário válido!");
          this.horaerro = true;

        }
      })
  }
ngOnInit(): void {
  this.horaService.getHora()
  .then(as => this.horas = as)
  .catch(erro => alert(erro));
}

}

