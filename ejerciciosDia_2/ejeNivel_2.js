console.log('Nivel 2');
//Ejercicio: Nivel 2
//R1:Usando console.log() imprima la siguiente declaración:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("No hay mejor ejercicio para el corazón que agacharse y levantar a las personas");

//R2:Usando console.log() imprima la siguiente cita de la Madre Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("El amor no es condescendiente y la caridad no se trata de lástima, sino de amor. La caridad y el amor son lo mismo: con la caridad se da amor, así que no solo des dinero, sino que extiendas la mano");

//R3:Comprueba si el tipo '10' es exactamente igual a 10. Si no, hazlo exactamente igual.
console.log(10 === Number('10'));

//R4:Comprueba si parseFloat('9.8') es igual a 10, si no, hazlo exactamente igual a 10.
console.log(Math.round(parseFloat('9.8')) == 10);

//R5:Comprueba si "on" se encuentra tanto en python como en la jargon
console.log('python y jargon'.includes('on'));

//R6:Espero que este curso no esté lleno de jargon . Comprueba si hay jargon en la oración.
console.log('Espero que este curso no esté lleno de jargon'.includes('jargon'));

//R7:Generar un número aleatorio entre 0 y 100 inclusive.
console.log(Math.floor(Math.random() * 100));

//R8:Generar un número aleatorio entre 50 y 100 inclusive.
console.log(Math.floor(Math.random() * (50) + 50));

//R9:Generar un número aleatorio entre 0 y 255 inclusive.
console.log(Math.floor(Math.random() * 255));

//R10:Accede a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let cd = 'JavaScript'
console.log(cd[4]);

//R11:Utilice console.log() y caracteres de escape para imprimir el siguiente patrón.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t2\t5\t125');

//R12:Utilice substr para separar la frase porque porque porque de la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
let frase = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(frase.substr(35, 20));