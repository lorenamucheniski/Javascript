//forma tradicional de declarar função
function falaOi () {
    console.log('Oi')
}

falaOi();

//constante recebendo uma função como dado
const souUmDado = function(){
    console.log('sou um dado');
}
souUmDado();

//passando a função souUmDado como parâmetro
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo...')
    funcao();
}
executaFuncao(souUmDado);

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();