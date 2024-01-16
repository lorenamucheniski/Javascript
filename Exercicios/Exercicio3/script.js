//capturar o evento de submit do formulário
//selecionando o formulário e guardando em uma constante 'form'
const form = document.querySelector('.form');

//adicionando um evento de submit e criando uma função
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    //criando uma const e inserinod um paragrafo na div resultado
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Alguma coisa';
    resultado.appendChild(p);
}