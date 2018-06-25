import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Agendamento } from './agendamento';

@Injectable()
export class AgenService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(agendamento: Agendamento): Promise<Agendamento> {
    return this.http.post(this.taURL + "/novoagen",JSON.stringify(agendamento), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return agendamento;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(agendamento: Agendamento): Promise<Agendamento> {
    return this.http.put(this.taURL + "/novoagen",JSON.stringify(agendamento), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return agendamento;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getAgendamentos(): Promise<Agendamento[]> {
    return this.http.get(this.taURL + "/novoagen")
             .toPromise()
             .then(res => res.json() as Agendamento[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de agendamento',erro);
    return Promise.reject(erro.message || erro);
  }
}