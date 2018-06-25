"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const melhorhora_1 = require("./melhorhora");
var app = express();
exports.app = app;
var horas = new melhorhora_1.MelhorHora();
app.use(bodyParser.json());
app.get('/hora', function (req, res) {
    var hora = JSON.stringify(horas.getHoras());
    res.send(hora);
});
app.post('/hora', function (req, res) {
    var hora = req.body;
    hora = horas.gravar(hora);
    if (hora) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=gou-server.js.map