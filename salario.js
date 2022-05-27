"use strict";
exports.__esModule = true;
exports.horaExtra = exports.salario = exports.chamar = exports.valorsalario = exports.nome = void 0;
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
function salarioLiquido() {
}
salarioLiquido();
