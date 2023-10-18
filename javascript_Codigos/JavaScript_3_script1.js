/*
Tipos de datos en una variable:

A)  Primitivos
    1. Number:      let variableDeNumero = 1024;
                    variableDeNumero = 5;
                    let varSpecial1 = 22/0; (Infinito)
                    let varSpecial2 = -22/0; (Negativo Infinito)
                    let varSpecial3 = "Hola"*0; (Nan "Not A Number")
                    let varSpecial4 = 5.2852025658675628n; (BigInt)

    2. Strings:     let variableString = "Pepito pica papa";
                    variableString = true; <-- Indica que el lenguaje es dinamicamente tipado (como Lua)
                    variableString = `Yo lei que "Pepito pica papa"`;
                    let variableStringMezclada = `Aqui esta lo que dijo pepito: ${variableString}. Bastante interesante`;

    3. Booleans     let varBool1 = false;
                    varBool1 = true;

    4. Null         let varVacia = null;

    5. Undefined    let varNoDefinida;
                    let varNoDefinida2 = undefined; (Mala práctica)

    6. Symbols      --Analizar en proximos videos

B)  Objeto
    1. Arrays:      let arreglo = [1,2,3]; --Solo pueden guardar un tipo de datos en cada arreglo como en C

    2. Objetos      let objeto = {
                        name: "Arif",
                        age: 26,
                        membership: true
                    };
                    let formatoDeOOP{
                        option1: 1
                        option2: 2
                        option3: 3
                    };
*/
let textoPrueba = "Este codigo funciona";

document.write(textoPrueba);