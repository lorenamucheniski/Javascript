const numero= Number(prompt ('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo'); //pegando o elemento do html cujo ID é 'número-titulo'
numeroTitulo.innerHTML = numero;  //constante numeroTitulo recebe o valor de numero e passa para o HTML

const texto = document.getElementById('texto');
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>A raiz quadrada de ${numero} é igual a ${numero ** (1/2)}`;
texto.innerHTML += `<p>O numero ${numero} é inteiro? ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;



