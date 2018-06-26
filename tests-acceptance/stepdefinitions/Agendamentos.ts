import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

var user = "Usuario";

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^Eu estou na página de Agendamento do negócio "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('GoU');
        await $("a[name='Agendamentos']").click();
        await $("a[name='Novo Agendamento']").click();
        await $("input[name='locationbox']").sendKeys(<string> name);
    })

    Given(/^O horário de "([^\"]*)" no dia "([^\"]*)" está livre.$/, async (hora,dia) => {
        var allhora : ElementArrayFinder = element.all(by.name('agenlist'));
        await allagens;
        var sameagens = allagens.filter(elem =>
                                      elem.getText().then(text => text === hora));
        var sameagens = allagens.filter(elem =>
                                        elem.getText().then(text => text === dia));
        await sameagens;
        await sameagens.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^Eu faço uma reserva para "(\d*) pessoas" no horário de "([^\"]*)" no dia "([^\"]*)".$/, async (qtd, hora, dia) => {
        await $("input[name='userbox']").sendKeys(<string> user);
        await $("input[name='quantitybox']").sendKeys(<string> qtd);
        await $("input[name='datebox']").sendKeys(<string> dia);
        await $("input[name='timebox']").sendKeys(<string> hora);
        await element(by.buttonText('Agendar')).click();
    });

    When(/^Eu cancelo a reserva para o horário de "([^\"]*)" no dia "([^\"]*)"$/, async (hora, dia) => {
        await element(by.buttonText('X')).click();
    });

    Then(/^Eu recebo uma mensagem de "Reserva feita com sucesso"$/, async () => {
        const mensagem = element(by.binding('alert'));
        await expect(mensagem.getText()).toEqual("Reserva feita com sucesso");
    });

    Then(/^Eu recebo uma mensagem de "Horário não disponível, se possível, tente um dos horários disponíveis"$/, async () => {
        const mensagem = element(by.binding('alert'));
        await expect(mensagem.getText()).toEqual("Horário não disponível, se possível, tente um dos horários disponíveis");
    });

    Then(/^Eu recebo uma mensagem de "Reserva Cancelada com sucesso"$/, async () => {
        const mensagem = element(by.binding('alert'));
        await expect(mensagem.getText()).toEqual("Reserva Cancelada com sucesso");
    });

    Then(/^A lista de Meus Agendamentos está vazia$/, async () => {
        var sameagens : ElementArrayFinder = element.all(by.name('agenlist'));
        await sameagens.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Then(/^O agendamento realizado para o negócio "(\d*)" para "(\d*) pessoas" no horário de "([^\"]*)" no dia "([^\"]*)" pode ser visto na lista de Meus Agendamentos.$/, async (local, qtd, hora, dia) => {
        var allagens : ElementArrayFinder = element.all(by.name('agenlist'));
        await allagens;
        var sameagens = allagens.filter(elem =>
                                      elem.getText().then(text => text === local));
        var sameagens = allagens.filter(elem =>
                                        elem.getText().then(text => text === qtd));
        var sameagens = allagens.filter(elem =>
                                        elem.getText().then(text => text === hora));
        var sameagens = allagens.filter(elem =>
                                        elem.getText().then(text => text === dia));
        await sameagens;
        await sameagens.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})
