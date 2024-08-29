//Ejercicios: Nivel 3
console.log('nivel 3')

//R1:Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
//RESUELTO=>
let formatoCuatro = `${year}-0${month}-${date} 0${hours}:${minutes}`
console.log(formatoCuatro);

//PRUEBA=>
let a = 'b';
if (a > 0) {
  console.log(`${a} es un número positivo`);
} else if (a < 0) {
  console.log(`${a} es un número negativo`);
} else if (a == 0) {
  console.log(`${a} es cero`);
} else {
  console.log(`${a} no es un número`);
}
//PRUEBA=>
    /*
let dayUserInput = prompt("¿Qué día es hoy?");
let day = dayUserInput.toLowerCase();
        switch (day) {
        case "lunes":
            console.log("Hoy es Lunes");
            break;
        case "martes":
            console.log("Hoy es Martes");
            break;
        case "miércoles":
            console.log("Hoy es Miércoles");
            break;
        case "jueves":
            console.log("Hoy es Jueves");
            break;
        case "viernes":
            console.log("Hoy es Viernes");
            break;
        case "sábado":
            console.log("Hoy es Sábado");
            break;
        case "domingo":
            console.log("Hoy es Domingo");
            break;
        default:
            console.log("No es un día de semana.");
        }
    */