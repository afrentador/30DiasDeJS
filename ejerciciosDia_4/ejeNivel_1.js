//Ejercicios: Nivel 1
console.log('Nivel 1');

//R1:Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
//RESUELTO=>
    //Ingrese su edad: 30
    //Tiene la edad suficiente para conducir.
    
    //Ingrese su edad:15
    //Te faltan 3 años para conducir.

let edadUsuario = 15
//let edadUsuario = Number(prompt('Ingresa tu Edad'))
let mayoriaEdad = 18 - edadUsuario

 if (edadUsuario < 18){
    console.log(`Aun te faltan cumplir ${mayoriaEdad} años para conducir`); 
 } else {
    console.log(`Ya tienes ${edadUsuario} edad suficiente para Conducir`);
 }

//R2:Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
//RESUELTO=>
    //Ingrese su edad: 30
    //Eres 5 años mayor que yo.
let tuEdad = 30
//let tuEdad = Number(prompt(`Ingresa tu edad`))
let miEdad = 25
//let miEdad = Number(prompt(`Mi tu edad`))

if (tuEdad > miEdad) {
    console.log(`Eres ${tuEdad - miEdad} años mayor que yo`);
} else {
    console.log(`Yo soy mayor que tu`);
}

//R3:Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
//RESUELTO=>
//4 es mayor que 3
let a = 4;
let b = 3;

//.Usando if else
if(a > b){
    console.log('a es mayor que b');
}else{
    console.log('b es mayor que a'); 
}

//..Operador ternario.
 let mayor = a < b
    mayor 
    ? console.log('a es menor que b')
    : console.log('b es menor que a');
    
//R4:Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
//RESUELTO=>
    // Ingrese un número: 2
    // 2 es un número par
    
    // Ingrese un número: 9
    // 9 es un número impar
    
let valorAleatorio = 9
//let valorAleatorio = Number(prompt(`Ingresa un Numero`))
let resto = valorAleatorio % 2

//.Usando if else
if(valorAleatorio % 2){
    console.log(valorAleatorio +' '+'es un número impar');
} else {
    console.log(valorAleatorio +' '+'es un número par');
}

//..Operador ternario.
resto
? console.log(valorAleatorio +' '+'es un número impar')
: console.log(valorAleatorio +' '+'es un número par');
