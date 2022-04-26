//function defined 
export function nome():string { //the function returns a string 
    return "diego" 
 } 
  function valorsalario():string{
        return"salario mes"
    } 
 function chamar() { 
    var asalario = valorsalario()
    var msg = nome() //function chamar 
    console.log(msg) 
    console.log(asalario)
 } 
 
 //invoke function 
 chamar();


 function salario() : number{
    return 2427
 }
 salario();

 function horaExtra(): void{
    
    var dinheiro = salario()
     console.log(dinheiro)
    var horas= "horaextra"
     console.log(horas) 
     console.log(dinheiro/200 )
     

 }

   horaExtra();


function inss(): void{
    var disconto=salario();
    
   if (disconto<=1212)
   { 
     
     var adisconto="faixa1 do inss"
     console.log(adisconto)

     console.log((disconto*7)/100)
   }

   if (disconto >=1215 && disconto <=2427)
   { 
     
     var adisconto="faixa2 do inss"
     console.log(adisconto)

     console.log((disconto*9)/100)
   }

   if (disconto<=1212)
   { 
     
     var adisconto="faixa3 do inss"
     console.log(adisconto)

     console.log((disconto*7)/100)
   }

   if (disconto<=1212)
   { 
     
     var adisconto="faixa1 do inss"
     console.log(adisconto)

     console.log((disconto*7)/100)
   }

   if (disconto<=1212)
   { 
     
     var adisconto="faixa1 do inss"
     console.log(adisconto)

     console.log((disconto*7)/100)
   }



}   

  inss();


function desconto():void{

} 
   desconto();

function ir(): void{

}
   ir( );

function descontoIR():void{

}

   descontoIR();


function salarioLiquido():void{

}   
   salarioLiquido();