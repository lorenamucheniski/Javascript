
//declarando um objeto dentro de uma funcao
function criaPessoa (nome, sobrenome, idade ) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Lorena', 'Mucheniski', 25)
const pessoa2 = criaPessoa ('Samuel', 'Mucheniski', 3)
const pessoa3 = criaPessoa ('Pedro', 'Henrique', 18)
const pessoa4 = criaPessoa ('Gabriel', 'Samuel', 16)
const pessoa5 = criaPessoa ('Matheus', 'Samuel', 19)

console.log(pessoa1.nome, pessoa2.nome, pessoa2.sobrenome)

//criando um objeto literal com uma funcao
const user = {
    nome: 'Lorena',
    sobrenome: 'Mucheniski',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi ...`)
    },

    fala2() {
        console.log(`A minha idade é ${this.idade}`)
    },

    incrementoIdade() {
        this.idade++;
    }
};

user.fala();
user.fala2();
user.incrementoIdade();
user.fala2();
