
const diaHoy = new Date();




let valor = diaHoy;
//Retorna el número del mes: 0 = Enero
valor = diaHoy.getMonth();
// Retorna el numero del día: 0 = Domingo
valor = diaHoy.getDay();
// retorna el numero del día del mes
valor = diaHoy.getDate();
//año actual
valor = diaHoy.getFullYear();
// Minutos de la hora
valor = diaHoy.getMinutes();
// las horas del día
valor = diaHoy.getHours();
// timestamp (milisegundos)
valor = diaHoy.getTime();
// Año predefinido
valor = diaHoy.setFullYear(1998);
valor = diaHoy.getFullYear();


console.log(valor);

//new date es igual a MES, DIA Y AÑO
const unDia = new Date("1-5-1987");

let valor1;

valor1 = unDia.getDay();

console.log(valor1);

//sigue en la clase 203