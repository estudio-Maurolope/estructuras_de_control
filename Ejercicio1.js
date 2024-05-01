// Importa el módulo readline de Node.js
const readline = require('readline');

// Crea una interfaz para leer desde la entrada estándar (consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario y espera por su entrada
rl.question('Por favor, ingresa un numero: ', (numero) => {

// Una vez que el usuario ingresa su nombre, se ejecuta esta función de callback
//Se comvierte el dato capturado a tipo entero
numero = parseInt(numero);

if (numero > 0){
    console.log(`El numero: ${numero} es un numero positivo.`);
} else if(numero === 0){
    console.log(`El numero ingresado es un ${numero}.`)
} else {
    console.log(`El numero: ${numero} es un numero negativo.`)
}

// Cierra la interfaz de lectura
rl.close();
});
