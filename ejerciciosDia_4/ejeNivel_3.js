//Ejercicios: Nivel 3
console.log('nivel 3')

//R1:Escribe un programa que diga el número de días en un mes.
    //   Introduce un mes: Enero
    //   Enero tiene 31 días.

    //   Introduce un mes: ENERO
    //   enero tiene 31 dias

    //   Introduce un mes: Febrero
    //   Febrero tiene 28 días.

    //   Introduce un mes: FEbrero
    //   Febrero tiene 28 días.
let diasDelMes = '' // prompt('Ingresa un Mes').toLowerCase();

const mesAño = [
    {name: 'Enero', dias:31},
    {name: 'Febrero', dias:28},
    {name: 'Marzo', dias:31},
    {name: 'Abril', dias:30},
    {name: 'Mayo', dias:31},
    {name: 'Junio', dias:30},
    {name: 'Julio', dias:31},
    {name: 'Agosto', dias:31},
    {name: 'Septiembre', dias:30},
    {name: 'Octubre', dias:31},
    {name: 'Noviembre', dias:30},
    {name: 'Diciembre', dias:31}
];

const mesesDelAño = (diasDelMes) => {

    if(diasDelMes == 'enero'){
        console.log(`${mesAño[0].name} tiene ${mesAño[0].dias} dias`);
    }else if(diasDelMes == 'febrero'){
        console.log(`${mesAño[1].name} tiene ${mesAño[1].dias} dias`);
    }else if(diasDelMes == 'marzo'){
        console.log(`${mesAño[2].name} tiene ${mesAño[2].dias} dias`);
    }else if(diasDelMes == 'abrli'){
        console.log(`${mesAño[3].name} tiene ${mesAño[3].dias} dias`);
    }else if(diasDelMes == 'mayo'){
        console.log(`${mesAño[4].name} tiene ${mesAño[4].dias} dias`);
    }else if(diasDelMes == 'junio'){
        console.log(`${mesAño[5].name} tiene ${mesAño[5].dias} dias`);
    }else if(diasDelMes == 'julio'){
        console.log(`${mesAño[6].name} tiene ${mesAño[6].dias} dias`);
    }else if(diasDelMes == 'agosto'){
        console.log(`${mesAño[7].name} tiene ${mesAño[7].dias} dias`);
    }else if(diasDelMes == 'septiembre'){
        console.log(`${mesAño[8].name} tiene ${mesAño[8].dias} dias`);
    }else if(diasDelMes == 'octubre'){
        console.log(`${mesAño[9].name} tiene ${mesAño[9].dias} dias`);
    }else if(diasDelMes == 'noviembre'){
        console.log(`${mesAño[10].name} tiene ${mesAño[10].dias} dias`);
    }else if(diasDelMes == 'diciembre'){
        console.log(`${mesAño[11].name} tiene ${mesAño[11].dias} dias`);
    }else{
        console.log('Debes ingresar un Mes Valido');        
    }    
}

mesesDelAño('octubre')
//funcion con metodo map
let mesIngresado = prompt('Ingresa un Mes').toLowerCase(); // Captura el mes del usuario y lo convierte a minúsculas

const mesesDelAño2 = (mes) => {
    // Encuentra el mes ingresado en el array mesAño
    const mesEncontrado = mesAño.find(m => m.name === mes); // Utiliza find en lugar de include
    
    if (mesEncontrado) {
        // Si encuentra el mes, muestra cuántos días tiene
        console.log(`El mes de ${mesEncontrado.name} tiene ${mesEncontrado.dias} días.`);
    } else {
        // Si no encuentra el mes, muestra un mensaje de error
        console.log('Mes no válido. Por favor, ingresa un mes correcto.');
    }
}

// Llamamos a la función con el mes ingresado
mesesDelAño2(mesIngresado);


//R2:Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

const AÑO = 365

console.log(AÑO * 4 + 1);
let cualDiaEs = diasDelMes

const CUANTOS_DIAS =()=>{

    if(cualDiaEs <= 31){
        console.log(`Estas en el el mes de ${mesAño[0].name}`);
    }else if(cualDiaEs > 31 && cualDiaEs <= 59){
        console.log(`Estas en el el mes de ${mesAño[1].name}`);
    }
    //else if(diasDelMes == 'marzo'){
    //     console.log(`${mesAño[2].name} tiene ${mesAño[2].dias} dias`);
    // }else if(diasDelMes == 'abrli'){
    //     console.log(`${mesAño[3].name} tiene ${mesAño[3].dias} dias`);
    // }else if(diasDelMes == 'mayo'){
    //     console.log(`${mesAño[4].name} tiene ${mesAño[4].dias} dias`);
    // }else if(diasDelMes == 'junio'){
    //     console.log(`${mesAño[5].name} tiene ${mesAño[5].dias} dias`);
    // }else if(diasDelMes == 'julio'){
    //     console.log(`${mesAño[6].name} tiene ${mesAño[6].dias} dias`);
    // }else if(diasDelMes == 'agosto'){
    //     console.log(`${mesAño[7].name} tiene ${mesAño[7].dias} dias`);
    // }else if(diasDelMes == 'septiembre'){
    //     console.log(`${mesAño[8].name} tiene ${mesAño[8].dias} dias`);
    // }else if(diasDelMes == 'octubre'){
    //     console.log(`${mesAño[9].name} tiene ${mesAño[9].dias} dias`);
    // }else if(diasDelMes == 'noviembre'){
    //     console.log(`${mesAño[10].name} tiene ${mesAño[10].dias} dias`);
    // }else if(diasDelMes == 'diciembre'){
    //     console.log(`${mesAño[11].name} tiene ${mesAño[11].dias} dias`);
    // }else{
    //     console.log('');        
    // }
} 

CUANTOS_DIAS(58)
// console.log(`${mesAño[1].name} esta comprendido desde el dia "31" al dia "${mesAño[0].dias + 28}"`);
// console.log(`${mesAño[2].name} esta comprendido desde el dia "59" al dia "${mesAño[2].dias + 59}"`);
// console.log(`${mesAño[3].name} esta comprendido desde el dia "90" al dia "${mesAño[3].dias + 90}"`);
// console.log(`${mesAño[4].name} esta comprendido desde el dia "120" al dia "${mesAño[4].dias + 120}"`);
// console.log(`${mesAño[5].name} esta comprendido desde el dia "151" al dia "${mesAño[5].dias + 151}"`);
// console.log(`${mesAño[6].name} esta comprendido desde el dia "181" al dia "${mesAño[6].dias + 181}"`);
// console.log(`${mesAño[7].name} esta comprendido desde el dia "212" al dia "${mesAño[7].dias + 212}"`);
// console.log(`${mesAño[8].name} esta comprendido desde el dia "243" al dia "${mesAño[8].dias + 243}"`);
// console.log(`${mesAño[9].name} esta comprendido desde el dia "273" al dia "${mesAño[9].dias + 273}"`);
// console.log(`${mesAño[10].name} esta comprendido desde el dia "304" al dia "${mesAño[10].dias + 304}"`);
// console.log(`${mesAño[11].name} esta comprendido desde el dia "334" al dia "${mesAño[11].dias + 334}"`);
