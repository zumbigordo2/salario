import { salario } from "./salario";
export function inss(): void{
    var desconto=salario();
    
   if (desconto<=1212)
   { 
     
     var adesconto="Salario faixa 1 do inss"
     console.log(adesconto)

     console.log(desconto-78.37)
   }

   if (desconto >=1215 && desconto <=2427)
   { 
     
     var adesconto="Salario faixa 2 do inss"
     console.log(adesconto)

     console.log(desconto-94)
   }

   if (desconto>2427 && desconto <=3461)
   { 
     
     var adesconto="Salario faixa 3 do inss"
     console.log(adesconto)

     console.log(desconto-125.37)
   }

   if (desconto >3461 && desconto <=7087)
   { 
     
     var adesconto="Salario faixa 4 do inss"
     console.log(adesconto)

     console.log(desconto-415)
   }
   if (desconto >7087)
   { 
     
     var adesconto="Salario faixa 5 do inss"
     console.log(adesconto)

     console.log(desconto-713)
   }


}   
inss();



