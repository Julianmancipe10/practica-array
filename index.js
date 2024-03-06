//Array vacio
let miArray = [];
//array con elementos 
let arrayelementos = [1,2,3,4,5];
//array con difertentes tipos de datos
let arrayelementosvarios = [1,"dos", true , null ];
//array utilizando constructor array()
let arrayconstructor = new Array ("uno", "dos", "tres","cuatro","cinco" );
//frecuencia numerica con array.from
let secuencianumerica = array.from({length: 5}, function(_,index) {
    return index + 1
});
console.log(secuencianumerica);
//array utilizando array fill()
let longitud = 5;
let valor = 10;
let arrayrepetido = new Array(longitud).fill(valor);
console.log(arrayrepetido); 
//array con string.split()
let cadenaTexto = "Hola amigos, me llamo Julian";
let arrayTexto = cadenaTexto.split(" ");
console.log(arrayTexto);
//array con string.split(...)
let array1 =[1,2,3];
let array2 =[4,5,6];
let combinacionarray = [...array1,...array2];
console.log(combinacionarray);
//array utilizando set y spread 
let arrayduplicados =[50,50,70,80,90,90];
let arraysinduplicados =[...new Set(arrayduplicados)];
console.log(arraysinduplicados);
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
console.log(arrayGenerado);
//  longitud de ub array
let Array = [77, 90, 30, 47, 50];
let longitudarray = Array.length;
console.log("La longitud del array es: " + longitud);
//agregar elemento final al array utilizando push vamos a agrgarle esto al array llamdao arrayelementos
arrayelementos.push(6)
arrayelementos.push(7)
arrayelementos.push(8)
console.log("arrays agregados:", arrayelementos);
// eliminar el ultimo elementoal array utulizando pop
let arrayeliminacion = ["uno","dos","tres",];
let ultimoelementoeliminado = arrayeliminacion.pop();
console.log("Elemento eliminado:", ultimoElementoEliminado);
console.log("Array después de eliminar el último elemento:", arrayeliminacion);
// agragar elemeno al inicio de el array 
let nuevoElemento1 = "cero" ;
let nuevoElemento2 = "negativo";
arrayeliminacion.unshift(nuevoElemento2);
arrayeliminacion.unshift(nuevoElemento1);
console.log("Array después de agregar al principio:", arrayeliminacion);
