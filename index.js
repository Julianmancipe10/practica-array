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


 
