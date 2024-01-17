//capturar o evento de submit do formulário
//selecionando o formulário e guardando em uma constante 'form'
const form = document.querySelector('.form');

//adicionando um evento de submit e criando uma função e= evento
form.addEventListener('submit', function(e) {
    e.preventDefault();                         
    const inputAltura = e.target.querySelector('#altura');          //pegando altura inserida pelo usuario
    const inputPeso = e.target.querySelector('#peso');              //pegando peso inserido pelo usuario
    console.log(inputPeso)
    console.log(inputAltura)
});

function criaP () {
    //criando uma const e inserindo um paragrafo na div resultado
    const p = document.createElement('p');           //criando elemento p
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
}