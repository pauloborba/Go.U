import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Agendamento } from './agendamento';
import { AgenService } from './agen.service';

@Component({
  selector: 'novoagen',
  templateUrl: './novoagen.component.html',
  styleUrls: ['./novoagen.component.css']
})
export class NovoAgenComponent implements OnInit {
   constructor(private agenService: AgenService) {}

   agendamento: Agendamento = new Agendamento();
   agendamentos: Agendamento[];
   

   criarAgendamento(a: Agendamento): void {
     this.agenService.criar(a)
        .then(ab => {
           if (ab) {
              this.agendamentos.push(ab);
              this.agendamento = new Agendamento();
           } else {

           }
        })
        .catch(erro => alert(erro));
   }

   

   ngOnInit(): void {
     this.agenService.getAgendamentos()
         .then(as => this.agendamentos = as)
         .catch(erro => alert(erro));
   }

}