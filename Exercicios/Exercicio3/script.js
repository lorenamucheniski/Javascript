//capturar o evento de submit do formulário
//selecionando o formulário e guardando em uma constante 'form'
const form = document.querySelector('.form');

//adicionando um evento de submit e criando uma função e= evento
form.addEventListener('submit', function(e) {
    e.preventDefault();                         
    setResultado('Olá mundo')                        //retornando o valor de resultado e exibindo no html
});

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    //criando uma const e inserindo um paragrafo na div resultado
    const p = document.createElement('p');           //criando elemento p
    p.classList.add('paragrafo-resultado');          //adicioandno uma classe no meu elemento p
    p.innerHTML = 'Alguma coisa';                    //exibir no meu documento html
    resultado.appendChild(p);                        //tornando a const p filha da const resultado
}