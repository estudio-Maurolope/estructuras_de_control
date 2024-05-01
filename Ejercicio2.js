// Importa el módulo readline de Node.js
const readline = require('readline');

// Crea una interfaz para leer desde la entrada estándar (consola)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Solicita al usuario los datos para realizar la operacion
rl.question('ingresa el primer numero: ',(numero1) => {
    rl.question('ingrese el segundo numero: ',(numero2) =>{
        rl.question('ingrese la operacion que desea realizar: ',(operacion) => {


        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        //verifica la operacion ingresada y realiza la operacion correspondiente
        if (operacion === '+'){
            const resultado = numero1+numero2;
            console.log(`el resulado de la suma es: ${resultado}`);
        }else if(operacion === '-'){
            const resultado = numero1-numero2;
            console.log(`el resulado de la resta es: ${resultado}`);
        }else if(operacion === '*'){
             const resultado = numero1*numero2;
             console.log(`el resulado de la multiplicacion es: ${resultado}`);
        }else if(operacion === '/'){
            if(numero2 !== 0){
                const resultado = numero1/numero2;
                console.log(`el resulado de la divicion es: ${resultado}`);
            }else {
                console.log('Error: no se puede dividir entre cero.');
            }
        } else {
            console.log('Error: operacion no valida.');
        }

        rl.close();
        });
    });
});
