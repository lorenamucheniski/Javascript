/**
 && = and = e     //todas as expressões precisam ser verdadeiras
 || = or = ou     // pode ter expressões verdadeiras ou falsas
 ! = not = não    // usado para inverter o valor booleano de uma expressão
 */

const usuario = 'Lorena';
const senha = '123456';


const logar = usuario === 'Lorena' && senha === '123456';
console.log(logar)

const logar2 = usuario === 'Lorena' || senha === '123456';
console.log(logar2)

