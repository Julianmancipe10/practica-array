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
