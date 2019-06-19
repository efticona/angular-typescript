let suma = function(a: number, b: number) {
  return a + b;
};

console.log(suma(5, 3));

let sumaFlecha = (a: number, b: number) => {
  return a + b;
};
console.log(sumaFlecha(3, 2));

let sumarFlecha2 = (a: number, b: number) => a + b;

console.log(sumarFlecha2(1, 2));

var obtenerNombre = function() {
  return "Juan Perez";
};

let obtenerNombreFlecha = () => "Juan Perez";
console.log(obtenerNombreFlecha());
