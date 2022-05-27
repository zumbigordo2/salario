"use strict";
exports.__esModule = true;
exports.ir = void 0;
var salario_1 = require("./salario");
function ir() {
    var desconto = (0, salario_1.salario)();
    if (desconto <= 1903) {
        var adesconto = "Faixa 5 do imposto de  renda salario sem desconto";
        console.log(adesconto);
        console.log(desconto);
    }
    if (desconto > 1903 && desconto <= 2826) {
        var adesconto = "Faixa 5 do imposto de  renda salario 7% desconto";
        console.log(adesconto);
        console.log(desconto - 142.80);
    }
    if (desconto > 2826 && desconto <= 3751) {
        var adesconto = "Faixa 5 do imposto de  renda salario 15% desconto";
        console.log(adesconto);
        console.log(desconto - 354.80);
    }
    if (desconto > 3751 && desconto <= 4664) {
        var adesconto = "Faixa 5 do imposto de  renda salario 22% desconto";
        console.log(adesconto);
        console.log(desconto - 636);
    }
    if (desconto > 4664) {
        // correct
        var adesconto = "Faixa 5 do imposto de  renda salario 27% desconto";
        console.log(adesconto);
        console.log(desconto - 869.39);
    }
}
exports.ir = ir;
ir();
