//LANÇANDO ERROS COM TRY, CATCH E THROW.

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números.')
    }

    return x + y;
}

//console.log(soma('lorena', 4))

try {
    console.log(soma('2', 3))
} catch(err) {
    console.log('x ou y não é um número.')
}