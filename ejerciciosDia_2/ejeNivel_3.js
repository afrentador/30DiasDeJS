//Ejercicios: Nivel 3

//R1:"El amor es lo mejor que hay en este mundo. Algunos han encontrado el amor y otros todavía lo están buscando". Cuenta la cantidad de palabras " amor " en esta oración.
let frase1 = "El amor es lo mejor que hay en este mundo. Algunos han encontrado el amor y otros todavía lo están buscando"
console.log(frase1.search('amor'));

//R2:Utilice match() para contar el número de todos los porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
console.log(frase.match(/porque/gi));

//R3:Limpia el siguiente texto y encuentra la palabra más frecuente (pista: usa reemplazo y expresiones regulares).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let rep = /[%,&,@,!,?,$,#]/gi
let newSentence = sentence.replace(rep, '')
console.log(newSentence);
console.log(newSentence.match(/teaching/g));

//R4:Calcula los ingresos anuales totales de la persona extrayendo los números del siguiente texto. 'Gana 5000 euros de salario al mes, 10000 euros de bonificación anual, 15000 euros de cursos en línea al mes'.

const SALARIO = 5000
const BONIFICACION = 10000
const INGRESO_CURSOS = 15000

console.log(`
    El ingreso anual de un Ingeniero es de: ${(SALARIO * 12) + (INGRESO_CURSOS * 12) + BONIFICACION}
    `)