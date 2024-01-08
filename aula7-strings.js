// indices       01234567
let umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString)

console.log(umaString[4]) //exibe o indice que se encontra na posição 4 (no caso a letra 'e')
console.log(umaString.charAt(5)) //faz o mesmo a ação acima, mas caso não encontre o valor ele não retorna nd
console.log(umaString.concat('/ O rato roeu a roupa do rei da Rússia')) //para concatenar textos
console.log(umaString.indexOf('roupa')) //mostra em qual indice a palavra começa
console.log(umaString.indexOf('o', 11)) //procurar a partir de um indice, exemplo: procure a letra 'o' a partir do indice 3
console.log(umaString.lastIndexOf('o')) //procurar a letra 'o' na variável começando do final
console.log(umaString.replace('uma', 'duas')) //encontra um texto e substitui por outro
console.log(umaString.replace(/r/g, '#')) //encontra um texto ou letra que se repete mais de uma vez e substitui por outro
console.log(umaString.length) //pega o tamanho da string
console.log(umaString.slice(7, 19)) //fatia a string, exemplo, pega o que esta dentro do indice 7 até o 19 (o 19 não é mostrado)
console.log(umaString.slice(-10)) //fatia a string, mas faz isso de trás pra frentre
console.log(umaString.slice(-11, -1)) //fatia a string de trás pra frentre, exemplo: pega os indices de -11 até o -1 (-1 não é mostrado)
console.log(umaString.split('r')) //divide a string no valor passado, exempo: a cada 'r' a string será dividida e armazenada em uma array
console.log(umaString.split('r', 3)) //divide a string no valor passado, mas nesse caso apena por 3 vezes