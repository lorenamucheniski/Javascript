//(condicao) ? 'valor caso a condicao seja verdadeira' : 'valor caso a condicao seja falsa'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuario Normal';
console.log(nivelUsuario)

//cor é null, cor será igual a que o usuario escolheu ou se não escolher nenhuma cor será Preta
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';