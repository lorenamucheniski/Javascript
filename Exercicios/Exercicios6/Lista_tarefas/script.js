const section = document.querySelector('.section');
const enviar = document.querySelector('.enviar');
const tarefas = document.querySelector('.tarefas');
const input = document.querySelector('.input')

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
}

enviar.addEventListener('click', function(){
    if(!input.value) return;
    criaTarefa(input.value);
    limparInput();
})

input.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!input.value) return;
        criaTarefa(input.value);
        limparInput();
    }
})

function limparInput(){
    input.value = '';
    input.focus();
}