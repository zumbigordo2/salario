import { salario } from "./salario";
import function nome(nome,horaextra,inss) {
    console.log(nome);
    console.log(horaextra);
    console.log(inss);
}

salario(process.argv[2], process.argv[3], process.argv[4]);
