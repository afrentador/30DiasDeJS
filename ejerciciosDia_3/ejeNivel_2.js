//Ejercicios: Nivel 2

//R1:Escriba un script que solicite al usuario ingresar la base y la altura del triángulo y calcular el área del triángulo (área = 0,5 x bxh).
//Enter base: 20
//Enter height: 10
//The area of the triangle is 100

let base = prompt('ingresa la base del triangulo')
let altura = prompt('ingresa la altura del triangulo')

let area = 0.5

console.log(area * (base * altura))

//R2:Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let areaA = Number(prompt('ingresa el lado  A')), areaB = Number(prompt('ingresa el lado B')), areaC = Number(prompt('ingresa el lado  C'));

let perimetro = areaA + areaB + areaC

console.log(perimetro);

//R3:Obtenga la longitud y el ancho usando el mensaje y calcule el área de un rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

let largo = Number(prompt('ingresa un longitud')), ancho = Number(prompt('ingresa el ancho'));

let perimetroDeLRectangulo = (largo + ancho) * 2
let areaDelRectangulo = perimetroDeLRectangulo * (largo * ancho)

console.log(areaDelRectangulo);

//R4:Obtenga el radio usando el mensaje y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3,14.

//R5:Calcular la pendiente, la intersección con el eje x y la intersección con el eje y de y = 2x -2

//R6:La pendiente es m = (y 2 -y 1 )/(x 2 -x 1 ). Halla la pendiente entre el punto (2, 2) y el punto (6, 10)

//R7:Compare la pendiente de las dos preguntas anteriores.

//R8:Calcula el valor de y (y = x 2 + 6x + 9). Intenta usar distintos valores de x y determina en qué valor de x y es 0.

//R9:Escriba un script que solicite al usuario que ingrese horas y tarifa por hora. ¿Cómo calcular el salario de la persona?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

//R10:Si la longitud de tu nombre es mayor a 7, di que tu nombre es largo; de lo contrario, di que tu nombre es corto.

//R11:Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

//R12:Declare dos variables myAge y yourAge y asígneles valores iniciales myAge y yourAge.
let myAge2 = 250
let yourAge2 = 25
//I am 225 years older than you.

//R13:Usando el indicador se obtiene el año en que nació el usuario y si el usuario tiene 18 años o más se le permite conducir, de lo contrario se le indica que espere una cierta cantidad de años.
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

//R14:Escriba un script que solicite al usuario que ingrese una cantidad de años. Calcule la cantidad de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años.
// Enter number of years you live: 100
// You lived 3153600000 seconds.

//R15:Cree un formato de hora legible para humanos utilizando el objeto de fecha y hora
// AAAA-MM-DD HH:mm
// DD-MM-AAAA HH:mm
// DD/MM/AAAA HH:mm