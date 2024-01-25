
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//pegando a cor de fundo de body e passando para os parágrafos
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
}