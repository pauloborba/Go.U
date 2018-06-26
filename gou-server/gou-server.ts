import express = require('express');
import bodyParser = require("body-parser");

import {Hora} from '../gui/GoU-gui/src/app/MelhorHora/hora';
import {MelhorHora} from './melhorhora';

var app = express();

var horas: MelhorHora = new MelhorHora();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/horas', function (req, res) {
  console.log('GET /horas: ' + req)
  res.send(JSON.stringify(horas.getHoras()));
})

app.post('/hora', function (req: express.Request, res: express.Response) {
  var hora: Hora = <Hora> req.body;
  hora = horas.gravar(hora);
  if (hora) {
    res.send({"success": "A hora foi gravada com sucesso"});
  } else {
    res.send({"failure": "A hora nao pode ser gravada"});
  }
})

app.put('/hora', function (req: express.Request, res: express.Response) {
  var hora: Hora = <Hora> req.body;
  hora = horas.remove(hora);
  if(hora) {
    res.send({"success": "A hora foi removida com sucesso"});    
  }else {
    res.send({"failure": "A hora nao pode ser removida"});
  }

})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close;
}

export { app, server, closeServer }