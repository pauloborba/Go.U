import express = require('express');
import bodyParser = require("body-parser");

import {Hora} from '../gui/GoU-gui/src/app/MelhorHora/hora';
import {MelhorHora} from './melhorhora';

var app = express();

var horas: MelhorHora = new MelhorHora();

app.use(bodyParser.json());

app.get('/hora', function (req, res) {
  var hora: string = JSON.stringify(horas.getHoras());
  res.send(hora);
})

app.post('/hora', function (req: express.Request, res: express.Response) {
  var hora: Hora = <Hora> req.body;
  hora = horas.gravar(hora);
  if (hora) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export { app }