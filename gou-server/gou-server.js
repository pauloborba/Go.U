"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const melhorhora_1 = require("./melhorhora");
var app = express();
exports.app = app;
var horas = new melhorhora_1.MelhorHora();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/horas', function (req, res) {
    console.log('GET /horas: ' + req);
    res.send(JSON.stringify(horas.getHoras()));
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