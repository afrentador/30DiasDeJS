//Ejercicios: Nivel 2
console.log('nivel 2')

//R1:Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
    // 90-100, A
    // 70-89, B
    // 60-69, C
    // 50-59, D
    // 0-49, F
//RESUELTO=>
// con IF ELSE
let calificacion = 30
//let calificacion = Number(prompt(`Ingresa la Calificacion`))

if(calificacion >= 90){
    console.log('Tu calificacion es "A"');
}else if(calificacion >=70){
    console.log('Tu calificacion es "B"');
}else if(calificacion >=60){
    console.log('Tu calificacion es "C"');
}else if(calificacion >=50){
    console.log('Tu calificacion es "D"');
}else{
    console.log('Tu calificacion es "F"');
}

//con TERNARIOS
let puntaje = (calificacion >= 90) ? 'Tu Puntuacion es "A"' :
              (calificacion >= 70) ? 'Tu Puntuacion es "B"' :
              (calificacion >= 60) ? 'Tu Puntuacion es "C"' :
              (calificacion >= 50) ? 'Tu Puntuacion es "D"' :
              'Tu Puntuacion es "F"';

console.log(puntaje);  
    
//R2:Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

    //. Septiembre, Octubre o Noviembre, la temporada es Otoño.
    //.. Diciembre, Enero o Febrero, la temporada es Invierno.
    //... Marzo, Abril o Mayo, la temporada es Primavera
    //.... Junio, Julio o Agosto, la temporada es Verano
//RESUELTO=>
// con IF & ELSE
 let temporada = 'junio'//prompt('Ingresa un mes del Año').toLowerCase();

    if( temporada === 'septiembre' || temporada === 'octubre' || temporada === 'noviembre'){
        console.log('La temporada es Otoño');    
    } else if ( temporada === 'diciembre' || temporada === 'enero' || temporada === 'febrero'){
        console.log('La temporada es Invierno');    
    }else if ( temporada === 'marzo' || temporada === 'abril' || temporada === 'mayo'){
        console.log('La temporada es Primavera');    
    }else if( temporada === 'junio' || temporada === 'julio' || temporada === 'agosto'){
        console.log('La temporada es Verano');    
    } else{
        console.log('Ingresaste un dato Incorrecto');
    };
//RESUELTO=>
// con SWITCH
let mes = temporada
    switch (mes){
        case 'enero':
            console.log("es Invierno");
            break;
            case 'febrero':
            console.log("es Invierno");
            break;
            case 'marzo':
            console.log("es Primavera");
            break;
            case 'abril':
            console.log("es Primavera");
            break;
            case 'mayo':
            console.log("es Primavera");
            break;
            case 'junio':
            console.log("es Verano");
            break;
            case 'julio':
            console.log("es Verano");
            break;
            case 'agost':
            console.log("es Verano");
            break;
            case 'septiembre':
            console.log("es Otoño");
            break;
            case 'octubre':
            console.log("es Otoño");
            break;
            case 'noviembre':
            console.log("es Otoño");
            break;
            case 'diciembre':
            console.log("es Invierno");
            break;
            default :
            console.log('dato incorrecto');
        }

//R4:Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
    // ¿Qué día es hoy? Sábado
    // El sábado es fin de semana.

    // ¿Qué día es hoy? sábAdo
    // El sábado es fin de semana.

    // ¿Qué día es hoy? Viernes
    // El viernes es un día laborable.

    // ¿Qué día es hoy? ViErNes
    // El viernes es un día laborable.
//RESUELTO=>
// con SWITCH
let queDiaEsHoy = 'martes'//prompt('introduce un dia').toLowerCase()
let dia = queDiaEsHoy
    switch (dia){
        case 'lunes':
        console.log(`El ${dia} es un día laborable`);
        break;
        case 'martes':
        console.log(`El ${dia} es un día laborable`);
        break;
        case 'miercoles':
        console.log(`El ${dia} es un día laborable`);
        break;
        case 'jueves':
        console.log(`El ${dia} es un día laborable`);
        break;
        case 'viernes':
        console.log(`El ${dia} es un día laborable`);
        break;
        case 'sabado':
        console.log(`El ${dia} es fin de Semana`);
        break;
        case 'domingo':
        console.log(`El ${dia} es fin de Semana`);
        break;
        default :
        console.log('Debes Introducir un "DIA"');
        }
