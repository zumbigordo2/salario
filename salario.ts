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


export function inss(): void{
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

   if (disconto>2427 && disconto <=3461)
   { 
     
     var adisconto="faixa3 do inss"
     console.log(adisconto)

     console.log((disconto*12)/100)
   }

   if (disconto >3461 && disconto <=7087)
   { 
     
     var adisconto="faixa4 do inss"
     console.log(adisconto)

     console.log((disconto*14)/100)
   }

}   

  inss();

export function ir(): void{
   var disconto=salario();
   
   if (disconto <=1903 )
   { 
     
     var adisconto="faixa1 do imposto de  renda: sem desconto"
     console.log(adisconto)

     console.log(disconto);
   }
  
   
   if (disconto >1903 && disconto <=2826 )
   { 
     
     var adisconto="faixa2 do imposto de  renda: 7% desconto"
     console.log(adisconto)

     console.log((disconto*7)/100);
   }
  
   
   if (disconto >2826 && disconto <=3751 )
   { 
     
     var adisconto="faixa2 do imposto de  renda: 15% desconto"
     console.log(adisconto)

     console.log((disconto*15)/100);
   }
  
   
   if (disconto >3751 && disconto <=4664 )
   { 
     
     var adisconto="faixa4 do imposto de  renda: 22% desconto"
     console.log(adisconto)

     console.log((disconto*22)/100);
   }
  
   
   if (disconto >4664)
   { 
      
     // correct
     var adisconto="faixa5 do imposto de  renda: 27% desconto"
     console.log(adisconto)

     console.log((disconto*27)/100);
    
     
   }
}
   ir( );



function salarioLiquido():void{

  

}   
   salarioLiquido();


