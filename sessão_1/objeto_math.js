let num1 = 9

let num2 = Math.floor(num1) //nova variavel recebendo o valor da primeira arredondado para baixo
console.log(num2) // num2 = 9

let num3 = Math.ceil(num1) //nova variavel recebendo o valor da primeira arredondado para cima
console.log(num3) // num3 = 10

let num4 = Math.round(num1) //arredonda o número para cima ou para baixo, faz isso automaticamente
console.log(num4) // num4= 10 pois o valor de num é 9.54, esta acima da metade

console.log(Math.max(1, 2, 3, 50, -50, 89, 30000, 598, -12, 30001))  // mostra qual o maior número

console.log(Math.min(1, 2, 3, 50, -50, 89, 30000, 598, -12, 30001))  // mostra qual o menor número

const aleatorio = Math.random() * (10-5) + 5  //exemplo para escolher um número aleatório entre 10 e 5
console.log(aleatorio)

const aleatorio2 = Math.round(Math.random() * (10-5) + 5)  //exemplo para escolher um número aleatório entre 10 e 5 que seja inteiro
console.log(aleatorio2)

console.log(num1 ** (1/2))  //para obter a raiz quadrada de um número

