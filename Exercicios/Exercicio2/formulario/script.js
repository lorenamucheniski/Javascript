function meuEscopo() {
    const form = document.querySelector('.form');               //selecionando o formulário através da classe
    const resultado = document.querySelector('.resultado');      //selecionando a div para exibir o resultado da nossa funçao

    const pessoas = [];       //criando uma array para armazenar os valores

    //criando uma função recebeEventoForm para receber o formulário
    function recebeEventoForm(evento) {
        evento.preventDefault();

        //selecionando os itens da minha form
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const nasc = form.querySelector('.nasc');

        //adicionando os valores na array pessoas
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            nasc: nasc.value,
        });

        resultado.innerHTML += `<p>Dados inseridos: ${nome.value} ${sobrenome.value} Nascimento: ${nasc.value}</p>`;
    }

    form.addEventListener('enviar', recebeEventoForm);
}

meuEscopo();