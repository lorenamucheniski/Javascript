//capturar o evento de submit do formulário
//selecionando o formulário e guardando em uma constante 'form'
const form = document.querySelector('.form');

//adicionando um evento de submit e criando uma função e= evento
form.addEventListener('submit', function(e) {
    e.preventDefault();                         
    const inputPeso = e.target.querySelector('#peso');              //pegando peso inserido pelo usuario
    const inputAltura = e.target.querySelector('#altura');          //pegando altura inserida pelo usuario
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log(imc)
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2 ;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
}

function criaP () {
    //criando uma const e inserindo um paragrafo na div resultado
    const p = document.createElement('p');           //criando elemento p
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML= msg;
    resultado.appendChild(p);
}