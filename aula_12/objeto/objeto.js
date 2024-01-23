//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DE OBJETO
const pessoa = {
    nome : 'Lorena',
    sobrenome: 'Mucheniski',
    idade: 25,
    endereco: {
        rua: 'qualquer',
        numero: 10,
        cidade: 'Prado Ferreira'
    }
};

//estou pegando do meu objeto pessoa os valores de nome e sobrenome e colocando dentro de uma variavel com o mesmo nome
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome)

const{nome: teste = '', sobrenome: sob = ''} = pessoa;
console.log(teste, sob)

//pegando do meu objeto endereço os atributos rua e numero e colocando dentro de uma variavel com o mesmo nome
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
//pegando o endereço completo
const{endereco} = pessoa;
console.log(endereco);

const{nome: nomeE, ...resto} = pessoa;
console.log(resto)