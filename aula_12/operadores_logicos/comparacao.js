/**
 Operadores de comparação

 > maior que 
 < menor que 
 >= maior ou igual
 <= menor ou igual 
 == igualdade
 === igualdade estrita (valor e tipo)
 != diferente
 !== diferente estrito (valor e tipo)
 */

 const num1 = 10;
 const num2 = 15;
 
 let comparacao = num1 === num2;
 console.log(`${num1} é igual a ${num2} ?`)
 console.log(comparacao);

 let comparacao2 = num1 !== num2;
 console.log(`${num1} é diferente de ${num2} ?`)
 console.log(comparacao2);

 let comparacao3 = num1 > num2;
 console.log(`${num1} maior que ${num2} ?`)
 console.log(comparacao3);

 let comparacao4 = num1 < num2;
 console.log(`${num1} é menor que ${num2} ?`)
 console.log(comparacao4);