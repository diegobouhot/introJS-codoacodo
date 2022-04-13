// alert("Hola Mundo")

console.log("Hola consola")
// console.warn
// console.error
// console.info

// variables
let alumno = "Diego"; //así se inicializa (con let principalemente. No conviene usar var)
alumno = "Diego";
let edad = 40;
console.log("El alumno que ingresó es " + alumno + " y la edad es " + edad);

//Estilos de variables que se usan:

/*
let nombreApellido = "Diego Bouhot" // CamelCase
let nombre_apellido = "" //snake_case
let NombreApellido = "" //Pascal Case
let $nombreapellido = ""
*/

//Estilos de variables que no van:

/*
let nombre-apellido = "" //kebab case
let 1ernombre  = "" //empezar con un número
let var = "" // usar palabras reservadas
*/

const entidad = "Gob. Ciudad" // Const es constante, no se puede pisar con una variable.

console.log("La entidad es " + entidad)

// Tipos de datos

//String: 

let str1 = "un string"
let str2 = 'otro string'
let str3 = `otro string más` //sirven para hacer algunas cosas que con las comillas no se pueden

let str4 = str1 + " y " + str2 + " se juntan";
let str5 = `${str1} y ${str2} se juntan`;

console.log(str4);
console.log(str5);

//Number:

let nombreVisitante = prompt("Hola, ¿Cómo te llamás?"); //Librería para pedir input al usuario. Devuelve un string
console.log(nombreVisitante);

let numero1 = parseInt(prompt("Ingresá un número:")); //Con parseInt convierte en integer
let numero2 = parseInt(prompt("Ingresá otro número:"));

let sumar = numero1 + numero2;
let restar = numero1 - numero2;
let multiplicar = numero1 * numero2;
let dividir = numero1 / numero2;

console.log("La suma es " + sumar);
console.log("La resta es " + restar);
console.log("La división es " + dividir);

