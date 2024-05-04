// Importa el módulo readline de Node.js
const readline = require('readline');

// Crea una interfaz para leer desde la entrada estándar (consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('ingrese un año para saber si es bisiesto o no: ' ,(año)=>{

if(año%4 === 0 && año%100 !== 0){
console.log(`el año ${año} es un año bisiesto`)
} else if (año%100 === 0 && año%400 === 0 ){
console.log(`el año ${año} es un año bisiesto`)
}else {
console.log(`el año ${año} no es un año bisiesto`)
}


 rl.close();

});
