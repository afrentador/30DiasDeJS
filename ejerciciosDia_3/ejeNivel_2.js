//Ejercicios: Nivel 2
console.log('nivel 2')
//R1:Escriba un script que solicite al usuario ingresar la base y la altura del triángulo y calcular el área del triángulo (área = 0,5 x bxh).
//Enter base: 20
//Enter height: 10
//The area of the triangle is 100
//RESUELTO=>
/*R1=
let base = prompt('ingresa la base del triangulo')
let altura = prompt('ingresa la altura del triangulo')

let area = 0.5

console.log(area * (base * altura))*/

//R2:Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
//RESUELTO=>
/*R2=
let areaA = Number(prompt('ingresa el lado  A')), areaB = Number(prompt('ingresa el lado B')), areaC = Number(prompt('ingresa el lado  C'));

let perimetro = areaA + areaB + areaC

console.log(perimetro);*/

//R3:Obtenga la longitud y el ancho usando el mensaje y calcule el área de un rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
//RESUELTO=>
/*r3=
let largo = Number(prompt('ingresa un longitud')), ancho = Number(prompt('ingresa el ancho'));

let perimetroDeLRectangulo = (largo + ancho) * 2
let areaDelRectangulo = perimetroDeLRectangulo * (largo * ancho)

console.log(areaDelRectangulo);*/

//R4:Obtenga el radio usando el mensaje y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3,14.
//RESUELTO=>
const PI = 3.14
let radio = 100

const areaDeCirculo = PI * radio * radio
let circunferencia = 2 * PI * radio

console.log(areaDeCirculo);
console.log(circunferencia);

//R5:Calcular la pendiente, la intersección con el eje x y la intersección con el eje y de y = 2x -2
//RESUELTO=>
let x = 0
let y = 0

const intersección = y = (2 * x) - 2

console.log(intersección);

//R6:La pendiente es m = (y 2 -y 1 )/(x 2 -x 1 ). Halla la pendiente entre el punto (2, 2) y el punto (6, 10)
//RESUELTO=>
const pendiente = 'm = (y 2 -y 1 )/(x 2 -x 1 )'
m = (2, 2) / (6, 10)
console.log(m);

//R7:Compare la pendiente de las dos preguntas anteriores.

//R8:Calcula el valor de y (y = x 2 + 6x + 9). Intenta usar distintos valores de x y determina en qué valor de x y es 0.

//R9:Escriba un script que solicite al usuario que ingrese horas y tarifa por hora. ¿Cómo calcular el salario de la persona?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
//RESUELTO=>
/*R9=
let horas = Number(prompt('Ingrese horas trabajadas')), valorHoras = Number(prompt('Ingrese el valor por horas'))

const SALARIO = horas * valorHoras
console.log(SALARIO);*/

//R10:Si la longitud de tu nombre es mayor a 7, di que tu nombre es largo; de lo contrario, di que tu nombre es corto.
//RESUELTO=>
/*R10=
let nuevoNombre = prompt('Ingresa tu Nombre')

if (nuevoNombre.length > 7) {
    alert('tu nombre es largo')
} else {
    alert('tu nombre es corto')
}*/

//R11:Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
//RESUELTO=>
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'

firstName2 = 'Candelaria', lastName2 = 'Arjuela';

if (firstName2.length > 7) {
    console.log(`Tu primer Nombre: ${firstName2} es largo y el Apellido de tu Familia es ${lastName2}`)
} else {
    console.log(`Tu primer Nombre: ${firstName2} es corto y el Apellido de tu Familia es ${lastName2}`);

}
//R12:Declare dos variables myAge y yourAge y asígneles valores iniciales myAge y yourAge.
//RESUELTO=>
/*
let myAge2 = Number(prompt(`Cuantos año tienes tu`))
let yourAge2 = Number(prompt(`Cuantos año tengo yo`))
//I am 225 years older than you.
if (myAge2 > yourAge2) {
    console.log(`Eres mayor que yo por ${myAge2 - yourAge2} años`);
} else {
    console.log(`Yo soy mayor que tu por ${yourAge2 - myAge2} años`);
}
*/

//R13:Usando el indicador se obtiene el año en que nació el usuario y si el usuario tiene 18 años o más se le permite conducir, de lo contrario se le indica que espere una cierta cantidad de años.
const year = now.getFullYear() // return year
//RESUELTO=>
/*
let añoDeNacimiento = Number(prompt(`ingresa tu año de nacimiento`))
let edadActual = year - añoDeNacimiento
let mayoriaDeEdad = añoDeNacimiento + 18

if (añoDeNacimiento <= year - 18) {
    console.log(`Tienes ${edadActual} años, y Puedes conducir`);
} else {
    console.log(`Tines solo ${edadActual} y debes esperar ${mayoriaDeEdad - year} años`);
}
*/

//R14:Escriba un script que solicite al usuario que ingrese una cantidad de años. Calcule la cantidad de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años.
//RESUELTO=>
/*
let misAños = Number(prompt(`Cuantos tu año tienes`))
let añosVividos = 31536000 * misAños
console.log(`Has vivido ${añosVividos} segundos de vida`);
*/
// console.log(24 * 60); //minutos dia
// console.log(1440 * 60); //segundos por dia
// console.log(86400 * 365);// segundos por año
// console.log(31536000 * 100);// segundos por año

//R15:Cree un formato de hora legible para humanos utilizando el objeto de fecha y hora
// AAAA-MM-DD HH:mm
// DD-MM-AAAA HH:mm
// DD/MM/AAAA HH:mm