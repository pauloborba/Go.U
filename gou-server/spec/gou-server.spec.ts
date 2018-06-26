import request = require("request-promise");
import { closeServer } from '../gou-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../gou-server')});

  afterAll(() => {server.closeServer()});

  it("inicializa-se vazio", () => {
    return request.get(base_url + "horas").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("cadastrando hora", () => {
    var options:any = {method: 'POST', uri: (base_url + "hora"), body:{user: "Guilherme", local: "RU", hi: "10", mi: "30", hf: "12", mf: "30"}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({success: "A hora foi gravada com sucesso"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

  it("cadastrando hora invalida", () => {
    var options:any = {method: 'POST', uri: (base_url + "hora"), body:{user: "Guilherme", local: "RU", hi: "10", mi: "30", hf: "27", mf: "68"}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({failure: "A hora nao pode ser gravada"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

    it("removendo hora", () => {
    return request.post(base_url + "hora", {"json":{"user": "Guilherme", "local": "RU", "hi": "10", "mi": "30", "hf": "12", "mf": "30"}}).then(body => {
      expect(body).toEqual({success: "A hora foi gravada com sucesso"});
    })
    var options:any = {method: 'PUT', uri: (base_url + "hora"), body:{user: "Guilherme", local: "RU", hi: "10", mi: "30", hf: "12", mf: "30"}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({success: "A hora foi removida com sucesso"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

  it("não cadastra alunos com CPF duplicado", () => {
    var options:any = {method: 'PUT', uri: (base_url + "hora"), body:{user: "Guilherme", local: "RU", hi: "10", mi: "30", hf: "12", mf: "30"}, json: true};
    return request.post(base_url + "hora", {"json":{"user": "Guilherme", "local": "RU", "hi": "10", "mi": "30", "hf": "12", "mf": "30"}}).then(body => {
         expect(body).toEqual({success: "A hora foi gravada com sucesso"});
        return request(options).then(body => 
             expect(body).toEqual({success: "A hora foi removida com sucesso"})
             ).catch(e =>
                  expect(e).toEqual(null))
         });
  })


})