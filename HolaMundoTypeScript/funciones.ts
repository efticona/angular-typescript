let saludo: string = "Hola mundo desde Typescript"; //inferencia de tipos

saludo = "cambio";
let numero: number; // se puede omitir el number
numero = 10;

let cualquiera: any; // para usar cualquier tipo
cualquiera = "cadena";
cualquiera = 10;

const PI_NUMERO = 3.14;
function saludar() {
  console.log(saludo);
  console.log(numero);
  console.log(PI);
}

saludar();
