//Array vacio
let miArray = [];

//array con elementos 
let arrayelementos = [1,2,3,4,5];

//array con difertentes tipos de datos
let arrayelementosvarios = [1,"dos", true , null ];

//array utilizando constructor array()
let arrayconstructor = Array ("uno", "dos", "tres","cuatro","cinco" );

//frecuencia numerica con array.from
let secuencianumerica = Array.from({length: 5}, function(_,index) {
    return index + 1
});

//array utilizando array fill()
let longitud = 5;
let valor = 10;
let arrayrepetido = new Array(longitud).fill(valor);
 
//array con string.split()
let cadenaTexto = "Hola amigos, me llamo Julian";
let arrayTexto = cadenaTexto.split(" ");

//array con string.split(...)
let array1 =[1,2,3];
let array2 =[4,5,6];
let combinacionarray = [...array1,...array2];

//array utilizando set y spread 
let arrayduplicados =[50,50,70,80,90,90];
let arraysinduplicados =[...new Set(arrayduplicados)];

//creaciom de un array con valores dinamicos echos conn una funcion 
function generarArrayAleatorio() {
    let longitud = Math.floor(Math.random() * 10) + 1;
    let arrayGenerado = [];
    for (let i = 0; i < longitud; i++) {
      arrayGenerado.push(Math.random() * 100); 
    }
    return arrayGenerado;
  }
let arrayGenerado = generarArrayAleatorio();

//  longitud de ub array
let arrayLong = [77, 90, 30, 47, 50];
let longitudarray = Array.length;

//agregar elemento final al array utilizando push vamos a agrgarle esto al array llamdao arrayelementos
arrayelementos.push(6)
arrayelementos.push(7)
arrayelementos.push(8)

// eliminar el ultimo elementoal array utulizando pop
let arrayeliminacion = ["uno","dos","tres",];
let ultimoElementoEliminado = arrayeliminacion.pop();

// agragar elemeno al inicio de el array 
let nuevoElemento1 = "cero" ;
let nuevoElemento2 = "negativo";
arrayeliminacion.unshift(nuevoElemento2);
arrayeliminacion.unshift(nuevoElemento1);

// eliminar el primer elemento del array arrayeliminacion  utilizando shift
let primerElementoEliminado = arrayeliminacion.shift();

//Para obtener una opcion del array arrayeliminacion  se utiliza slice()
let porcionArray = arrayeliminacion.slice(1, 3);

// Convertir el array en un string usando join()
let arraystring = ["uno", "dos", "tres"];
let arrayComoString = arraystring.join(", ");

// Obtener una subsección del array desde el segundo elemento desde el final hasta el final
let arrayseccion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subseccion = Array(arrayseccion.slice(-3));


//Eliminacion  de una porción del array sin modificar el original usando slice()
let originasinmodificarlArray = [1, 2, 3, 4, 5];
let removedItems = Array(originasinmodificarlArray.slice(2, 4));

// Agregar múltiples elementos al principio del array utilizando unshift() con spread operator
let Arraymultiple = [3, 4, 5];
let newElements = [1, 2];
Arraymultiple.unshift(...newElements);


