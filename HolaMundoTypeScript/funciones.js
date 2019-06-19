"use strict";
var saludo = "Hola mundo desde Typescript"; //inferencia de tipos
saludo = "cambio";
var numero; // se puede omitir el number
numero = 10;
var cualquiera; // para usar cualquier tipo
cualquiera = "cadena";
cualquiera = 10;
var PI_NUMERO = 3.14;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}
saludar();
