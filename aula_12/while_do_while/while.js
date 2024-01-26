
//função para pegar um número aleatório dentro de um conjunto de números.
function sorteio(min, max) {
    const s = Math.random() * (max - min) + min;
    return Math.floor(s);
}

const min = 1;
const max = 50;
let sort = sorteio(min, max);

while (sort !==10) {
    sort = sorteio(min, max);
    console.log(sort);
}