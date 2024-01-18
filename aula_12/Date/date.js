//para pegar a data atual (dia de hoje)
const data = new Date();
console.log(data.toString()); 

//passar uma data com números
const data2 = new Date(2024, 0, 10, 12, 30, 57)  //ano, mes, dia, hora, minutos, segundos
console.log(data2.toString());

//passar uma data com string
const data3 = new Date('2023-01-02 15:15:25')
console.log('Dia da semana', data3.getDay());     //0 - domingo, 6- sábado
console.log('Dia ', data3.getDate());
console.log('Mês ', data3.getMonth());    //mês começa do zero
console.log('Ano ', data3.getFullYear());
console.log('Hora ', data3.getHours());
console.log('Minuto ', data3.getMinutes());
console.log('Segundos ', data3.getSeconds());
console.log(data3.toString());

