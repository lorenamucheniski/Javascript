//criando uma array com objetos 

const elementos = [
    {tag: 'p', texto: 'Qualquer coisa aqui'},
    {tag: 'div', texto: 'Texto continua'},
    {tag: 'section', texto: 'Frase aqui'},
    {tag: 'footer', texto: 'Mais uma frase'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i =0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);