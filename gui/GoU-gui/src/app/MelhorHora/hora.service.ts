import { Hora } from './hora';
import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HoraService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gouURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  //horas: Hora[] = [];

  gravar(hora: Hora): Promise<Hora> {
    return this.http.post(this.gouURL + "/hora",JSON.stringify(hora), {headers:this.headers})
           .toPromise()
           .then(res => {
            if (res.json().success) {return hora;} else {return null;}

           })
           .catch(this.tratarErro);
  }

  remove(hora: Hora): Promise<Hora> {
    return this.http.put(this.gouURL + "/hora",JSON.stringify(hora), {headers:this.headers})
    .toPromise()
    .then(res => {
      if (res.json().success) {return hora;} else {return null;}

    })
    .catch(this.tratarErro);
  }

    getHora(): Promise<Hora[]> {
    return this.http.get(this.gouURL + "/horas")
             .toPromise()
             .then(res => res.json() as Hora[])
             .catch(this.tratarErro);
}
    private tratarErro(erro: any): Promise<any>{
    console.error('Erro ao registrar Hora!',erro);
    return Promise.reject(erro.message || erro);
}

}