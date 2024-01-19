const data = new Date('2020-04-08 13:00:00');
let diaDaSemana = data.getDay();
diaDaSemana = 4;
let diaSemanaTexto;

switch (diaDaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5: diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
       
}

console.log(diaDaSemana, diaSemanaTexto);
