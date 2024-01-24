//objeto pessoa
const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Mucheniski',
    idade: 3,
    cpf: 4585946987
};

//percorrendo o objeto com for in
for (let chave in pessoa){                     //chave = cada variavel dentro do objeto pessoa
    console.log(chave, pessoa[chave]);         // selecionando a variavel chave criada, e dentro do objeto pessoa pegando o valor de cada chave 
}