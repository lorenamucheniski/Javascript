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
const removido = alunos.pop()
console.log(removido)
console.log(alunos)
