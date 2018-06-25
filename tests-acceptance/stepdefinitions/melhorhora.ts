import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameLocal = ((elem, local) => elem.element(by.name('locallist')).getText().then(text => text === local));
let sameUser = ((elem, user) => elem.element(by.name('userlist')).getText().then(text => text === user));
let pAND = ((p,q) => p.then(a => q.then(b => a && b)));

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^Eu estou na pagina de Melhor Hora$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Go.U');
        await $("a[name='hora']").click();
    })

    When(/^Preencho os campos de melhor horário com estabelecimento "([^\"]*)" pelo usuário "([^\"]*)" das "(\d*)" e "(\d*)" ate "(\d*)" e "(\d*)"$/, async (local, user, hi, mi, hf, mf) => {
        await $("input[name='namebox']").sendKeys(<string> user);
        await $("input[name='localbox']").sendKeys(<string> local);
        await $("input[name='hibox']").sendKeys(<string> hi);
        await $("input[name='mibox']").sendKeys(<string> mi);
        await $("input[name='hfbox']").sendKeys(<string> hf);
        await $("input[name='mfbox']").sendKeys(<string> mf);
        await element(by.buttonText('Melhor Hora')).click();
    });

    Then(/^Eu consigo ver o Melhor Horário adicionado com usuario "([^\"]*)" estabelecimento "([^\"]*)" das "(\d*)" e "(\d*)" ate "(\d*)" e "(\d*)"$/, async (user, local, hi, mi, hf, mf) => {
        var listahoras : ElementArrayFinder = element.all(by.name('horalist'));
        listahoras.filter(elem => pAND(sameLocal(elem,local),sameUser(elem,user))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})