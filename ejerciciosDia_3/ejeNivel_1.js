console.log('Nivel 1');
//Ejercicios: Nivel 1

const now = new Date()
/*const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)*/

//console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

//R1:Declare la variable firstName, lastName, country, city, age, isMarried, year y asígnele un valor y utilice el operador typeof para comprobar diferentes tipos de datos.
let firstName = 'Victor'
let lastName = 'Mendoza'
let country = 'Venezuela'
let city = 'Maracaibo'
let age = 40
let isMarried = true
let neuYear = 2024

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (neuYear));

//R2:Comprueba si el tipo de '10' es igual a 10
console.log('10' == 10);

//R3:Comprueba si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10);

//R4:El valor booleano es verdadero o falso.

//i:Escriba tres declaraciones de JavaScript que proporcionen un valor veraz.
console.log('victor' === 'victor')
console.log(7 >= 6)
console.log('anais' != 'abraham')
//ii.Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log('Victor' === 'victor')
console.log(7 >= 10)
console.log(true != true)

//R5:Primero, determine el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

/*
i.4 > 3 = true
ii.4 >= 3 = true
iii.4 < 3 = false
iv.4 <= 3 = false
v.4 == 4 = true
vi.4 === 4 = true
vii.4 != 4 = false
viii.4 !== 4 = false
ix.4 != '4' = false
x.4 == '4' = true
xi.4 === '4' = false
*/
//xii.Encuentra la longitud de Python y la jerga y haz una declaración de comparación falsa.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.leng !== 'jargon'.leng);

//R6:Primero, determine el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

/*
4 > 3 y 10 < 12 = true
4 > 3 y 10 > 12 = false
4 > 3 || 10 < 12 = true
4 > 3 || 10 > 12 = true
!(4 > 3) = false
!(4 < 3) = true
!(FALSO) = false
!(4 > 3 y 10 < 12) = false
!(4 > 3 y 10 > 12) = true
!(4 === '4') = true
*/
//xi.No hay "on" tanto en dragon como en python = false
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!('FALSE'));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('dragon'.includes(!('on')));
console.log('python'.includes(!('on')));

//R7:Utilice el objeto Fecha para realizar las siguientes actividades

//¿Que año es hoy?
console.log(now.getFullYear());
//¿Cuál es el mes de hoy en número?
console.log(now.getMonth());
//¿Cuál es la fecha de hoy?
console.log(now.getDate());
//¿Qué es el día de hoy en número?
console.log(now.getDay());
//¿Que horario es ahora?
console.log(now.getHours());
//¿Que minutos hay ahora?
console.log(now.getMinutes());
//Descubra el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(now.getTime());