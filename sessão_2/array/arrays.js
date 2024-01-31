//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO 

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]  //criando a array
    // um = 100, dois= 200, 3= 300, etc....  
const [um, dois, tres, quatro, ...resto] = numeros;            //atribuindo os valores da minha array as constantes
console.log(um, dois, tres);
console.log(resto);        //os tres pontinhos significam que quero pegar todos os outros valores que sobraram e colocar dentro de uma variavel

///////////////////////////////////////////////////////////
const numeros2 = [100, 200, 300, 400, 500, 600, 700, 800]
// pula os valores que estão vazios
const [umA, , tresA, , cincoA ] = numeros2;
console.log(umA, tresA, cincoA)
//será exibido 100, 300, 500