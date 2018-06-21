import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NovoAgenComponent } from './Agendamento/novoagen.component';
import {AgenComponent} from './Agendamento/agen.component';
import {HoraComponent} from './MelhorHora/hora.component';
import {LocalComponent} from './Local/local.component';
import {FavComponent} from './Favorito/fav.component';


@NgModule({
  declarations: [
    AppComponent,
    NovoAgenComponent,
    AgenComponent,
    HoraComponent,
    LocalComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'novoagen',
        component: NovoAgenComponent
      },
      {
        path: 'agen',
        component: AgenComponent
      },
      {
        path: 'hora',
        component: HoraComponent
      },
      {
        path: 'local',
        component: LocalComponent
      },
      {
        path: 'fav',
        component: FavComponent
      }
    ])
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }