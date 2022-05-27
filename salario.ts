//function defined 
export function nome():string { //the function returns a string 
    return "diego" 
 } 
  export function valorsalario():string{
        return"salario mes"
    } 
 export function chamar() { 
    var asalario = valorsalario()
    var msg = nome() //function chamar 
    console.log(msg) 
    console.log(asalario)
 } 
 
 //invoke function 
 chamar();


 export function salario() : number{
    return 4600
 }
 salario();

 export function horaExtra(): void{
    
    var dinheiro = salario()
     console.log(dinheiro)
    var horas= "horaextra"
     console.log(horas) 
     console.log(dinheiro/200 )
     

 }

   horaExtra();

   