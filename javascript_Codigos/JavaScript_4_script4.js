//04 - Operadores lógicos
let p = false;
let q = false;

let resultado = p || q;
console.log(prueba); // false

p = true;
prueba = p || q;
console.log(prueba); // true

q = true;
prueba = p && q;
console.log(prueba); // true

p = false;
prueba = p && q;
console.log(prueba); // false

q = false;
prueba = p && q;
console.log(prueba); // false
console.log("\n\n");