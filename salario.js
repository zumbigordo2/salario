"use strict";
exports.__esModule = true;
exports.nome = void 0;
//function defined 
function nome() {
    return "diego";
}
exports.nome = nome;
function valorsalario() {
    return "salario mes";
}
function chamar() {
    var asalario = valorsalario();
    var msg = nome(); //function chamar 
    console.log(msg);
    console.log(asalario);
}
//invoke function 
chamar();
function salario() {
    return 2427;
}
salario();
function horaExtra() {
    var dinheiro = salario();
    console.log(dinheiro);
    var horas = "horaextra";
    console.log(horas);
    console.log(dinheiro / 200);
}
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
    if (disconto <= 1212) {
        var adisconto = "faixa3 do inss";
        console.log(adisconto);
        console.log((disconto * 7) / 100);
    }
    if (disconto <= 1212) {
        var adisconto = "faixa1 do inss";
        console.log(adisconto);
        console.log((disconto * 7) / 100);
    }
    if (disconto <= 1212) {
        var adisconto = "faixa1 do inss";
        console.log(adisconto);
        console.log((disconto * 7) / 100);
    }
}
inss();
function desconto() {
}
desconto();
function ir() {
}
ir();
function descontoIR() {
}
descontoIR();
function salarioLiquido() {
}
salarioLiquido();
