//os arrays são indexados pelos elementos, por exemplo 'Lorena' é o primeiro indice
console.log('O indice 0 da minha array é: ')
const alunos = ['Lorena','Matheus','Pedro','Samuel','Gabriel']; 
console.log(alunos[0]);

console.log('Mudando o valor do meu indice 0 para Paula: ')
alunos[0] = 'Paula';   //editando valores de uma array
console.log(alunos);

console.log('Para saber o tamanho da minha array: ')
console.log(alunos.length)  //saber quantos indices ela possui

console.log('Adicionando um novo valor na minha array: ')
alunos[5] = 'Claudio';  //adicionando um valor dentro da array
console.log(alunos);

console.log('Adicionando um item ao final da array: ')
alunos.push('Shirley')   //push adiciona do final da array
alunos.push('Ana Carolini')
console.log(alunos)

console.log('Adicionando um item no inicio da array: ')
alunos.unshift('Mariana')  //unshift adiciona no inicio da array
alunos.unshift('Ducinei')
console.log(alunos)

console.log('Removendo um item do final: ')
const removido = alunos.pop()    //remove do final da array
console.log(removido)
console.log(alunos)

console.log('Removendo um item do inicio: ')
const removido2 = alunos.shift()   //remove do inicio da array
console.log(removido2)
console.log(alunos)

console.log('Fatiamento de array: ')   //fatiando uma array
console.log(alunos.slice(0,5))         //lembrando que o ultimo indice fica de fora

console.log('Fatiamento de array usando negativos: ')   //fatiando uma array
console.log(alunos.slice(0,-2))                         //retira os dois ultimo itens da array

console.log(alunos instanceof Array)    //se estiver com duvida se esta trabalhando com array