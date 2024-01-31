
//declarando uma funcao que seu nome é soma e ela tera dois valores de x e y
function soma (x, y) {                          
    const resultado = x + y                          //a variavel resultado receberá a soma de x e y
    return resultado
}

console.log(soma(2,2))                               // passando os parametros para a funcao soma
console.log(soma(5,10))
console.log(soma(1,9))


// outra forma de declarar funcao atribuindo a variavel
const raiz = function (n) {
    return n ** 0.5
};
console.log(raiz(9))
