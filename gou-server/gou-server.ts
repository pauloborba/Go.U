import express = require('express');
import bodyParser = require("body-parser");

import {Hora} from '../gui/GoU-gui/src/app/MelhorHora/hora';
import {MelhorHora} from './melhorhora';

import { Agendamento } from '../gui/GoU-gui/src/app/Agendamento/agendamento';
import { NovoAgendamento } from './novoagendamento';

var app = express();

var horas: MelhorHora = new MelhorHora();
var agendamento: NovoAgendamento = new NovoAgendamento();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

//Servidor de melhor hora

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

//Servidor de agendamento

app.get('/novoagen', function (req, res) {
  res.send(JSON.stringify(agendamento.getAgendamentos()));
})

app.post('/novoagen', function (req: express.Request, res: express.Response) {
  var agendamento1: Agendamento = <Agendamento>req.body; //verificar se é mesmo agendamento!
  agendamento1 = agendamento.criar(agendamento1);
  if (agendamento1) {
    res.send({ "success": "O agendamento foi cadastrado com sucesso" });
  } else {
    res.send({ "failure": "O agendamento não pode ser cadastrado" });
  }
})

app.put('/agendamento', function (req: express.Request, res: express.Response) {
  var agendamento1: Agendamento = <Agendamento>req.body;
  agendamento1 = agendamento.atualizar(agendamento1);
  if (agendamento1) {
    res.send({ "success": "O agendamento foi atualizado com sucesso" });
  } else {
    res.send({ "failure": "O agendamento não pode ser atualizado" });
  }
})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close;
}

export { app, server, closeServer }