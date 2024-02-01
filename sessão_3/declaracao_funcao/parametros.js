/* a função definida com a palavra function tem uma variável especial que se chama
arguments que sustentas todos os argumentos enviados, mesmo que não tenha nenhum parametro
para recebe-los*/
function funcao () {
    let total = 0;
    for(argumentos of arguments) {
        total += argumentos;
    }

    console.log(total);
}

funcao(2, 5, 10, 20, 25) //argumento 

//aqui estou pré definindo um valor para o meu paramentro b caso não seja passado nenhum valor no argumento;
function soma (a, b = 2 ) {
    console.log(a + b)
}

soma(3)//argumento