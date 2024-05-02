// Importa el módulo readline de Node.js
const readline = require('readline');

// Crea una interfaz para leer desde la entrada estándar (consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sumaEdades = 0;
let personasContadas= 0;


function realizarPregunta(personas) {
    rl.question(`ingrese la edad de la ${personasContadas + 1} persona: `,(edad) =>{

        edad = parseInt(edad);

        if(edad > 0){
            sumaEdades += edad;
            personasContadas++;


            if(personasContadas === personas){
                const promedio = sumaEdades / personas;
                console.log(`El promedio de edad es: ${promedio}`);


                if (promedio >= 18){
                    console.log('el promedio de edad es mayor o igual a la mayoria de edad');
                    }else {
                    console.log('el promedio de edad es menor a la mayoria de edad');
                    }

                rl.close();
                }else {
                    realizarPregunta(personas);
                }

            } else {
                console.log('Edad no valida. debe ser una edad mayor a cero.');
                rl.close();
            }

        });
    }


rl.question('ingrese la cantidad de personas a realizar el promedio: ',(personas) =>{

   personas = parseInt(personas);
   realizarPregunta(personas);

});

