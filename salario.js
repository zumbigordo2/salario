"use strict";
exports.__esModule = true;
exports.ir = exports.inss = exports.horaExtra = exports.salario = exports.chamar = exports.valorsalario = exports.nome = void 0;
//function defined 
function nome() {
    return "diego";
}
exports.nome = nome;
function valorsalario() {
    return "salario mes";
}
exports.valorsalario = valorsalario;
function chamar() {
    var asalario = valorsalario();
    var msg = nome(); //function chamar 
    console.log(msg);
    console.log(asalario);
}
exports.chamar = chamar;
//invoke function 
chamar();
function salario() {
    return 4600;
}
exports.salario = salario;
salario();
function horaExtra() {
    var dinheiro = salario();
    console.log(dinheiro);
    var horas = "horaextra";
    console.log(horas);
    console.log(dinheiro / 200);
}
exports.horaExtra = horaExtra;
horaExtra();
function inss() {
    var disconto = salario();
    if (disconto <= 1212) {
        var adisconto = "faixa1 do inss";
        console.log(adisconto);
        console.log((disconto * 7) / 100);
    }
    if (disconto >= 1215 && disconto <= 2427) {
        var adisconto = "faixa2 do inss";
        console.log(adisconto);
        console.log((disconto * 9) / 100);
    }
    if (disconto > 2427 && disconto <= 3461) {
        var adisconto = "faixa3 do inss";
        console.log(adisconto);
        console.log((disconto * 12) / 100);
    }
    if (disconto > 3461 && disconto <= 7087) {
        var adisconto = "faixa4 do inss";
        console.log(adisconto);
        console.log((disconto * 14) / 100);
    }
}
exports.inss = inss;
inss();
function ir() {
    var disconto = salario();
    if (disconto <= 1903) {
        var adisconto = "faixa1 do imposto de  renda: sem desconto";
        console.log(adisconto);
        console.log(disconto);
    }
    if (disconto > 1903 && disconto <= 2826) {
        var adisconto = "faixa2 do imposto de  renda: 7% desconto";
        console.log(adisconto);
        console.log((disconto * 7) / 100);
    }
    if (disconto > 2826 && disconto <= 3751) {
        var adisconto = "faixa2 do imposto de  renda: 15% desconto";
        console.log(adisconto);
        console.log((disconto * 15) / 100);
    }
    if (disconto > 3751 && disconto <= 4664) {
        var adisconto = "faixa4 do imposto de  renda: 22% desconto";
        console.log(adisconto);
        console.log((disconto * 22) / 100);
    }
    if (disconto > 4664) {
        // correct
        var adisconto = "faixa5 do imposto de  renda: 27% desconto";
        console.log(adisconto);
        console.log((disconto * 27) / 100);
    }
}
exports.ir = ir;
ir();
function salarioLiquido() {
}
salarioLiquido();
