
window.onload = () => {

    console.log("cargado");
}
//const dato = "Dato";
//dato = "NyDato";

function init() {
    console.log("cargado");
}

// es funcion suma 2 numeros
function suma(valor1, valor2) {
    return valor1 + valor2;
}

let result = suma(10, 20);

if (result < 30) {
    console.log("resultado menor a 30");
}
else if (result > 30) {
    console.log("resultado mayor a 30");
}
else {
    console.log("resultado igual a 30");
}

//-----------------------------------------

let dia = new Date();
let diaSemana = dia.getDay();

//console.log(diaSemana);

let midia = "";

switch (diaSemana) {
    case 0:
        midia = "Domingo";
        break;
    case 1:
        midia = "Lunes";
        break;
    case 2:
        midia = "Martes";
        break;
    case 3:
        midia = "Miercoles";
        break;
    case 4:
        midia = "Jueves";
        break;
    case 5:
        midia = "Viernes";
        break;
    case 6:
        midia = "Sabado";
        break;

    default:
        midia = "No es un dia de la semana";
        break;
}


console.log(midia);

//let x = x + 1;

let dato1 = "5";
let dato2 = 5;

let resultado = (dato1 + dato2) - 2;
console.log(resultado / 2);

function cambio() {
    console.log("cambio");
}

let persona = new Object();
persona.nombre = "Juan";
persona.apellido = "Perez";

console.log(persona);

let persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: "Casa",
    detalle: function () {
        return this.nombre + " " + this.apellido;
    }
}

persona2.nueva = "Nueva";

console.log(persona2.detalle());
console.log(persona2.toString());

let numeros = [1, "2", persona2, 4, 5, 6, 7, 8, 9, 10];
let numeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const numero of numeros) {
    // console.log(numero);
}

console.log(numeros[1]);

//let dia2 = new Date();
//console.log(dia2);

numeros.push(100);
let ultimo = numeros.pop();
console.log("tamaño " + numeros.length + " ultimo " + ultimo);
console.log(numeros);
numeros.unshift(500);
numeros.shift();
console.log(numeros);
let concatenados = numeros.concat(numeros2);
console.log(concatenados);
let myslice = numeros.slice(2, 5);
console.log(numeros);
let mysplice = numeros.splice(1, 3, "nuevo", "nuevo2");
console.log(numeros);
console.log(numeros.join(" - "));
let nuevoArray = Array.from("mi cadena");
console.log(nuevoArray);
console.log("mi cadena nueva".split(" "));
console.log(Array.isArray(numeros));
console.log(numeros.includes(100));
console.log(numeros.indexOf(7));
numeros.reverse();
console.log(numeros);
let letras = ["c", "a", "d"];
console.log(letras.sort());

numeros.forEach((numero) => {
    console.log(numero);
});

let resul = numeros2.every((numero) => {
    return numero > 0;
});

console.log(resul);

let resul2 = numeros2.some((numero) => {
    return numero < 0;
});

let mymap = numeros2.map((numero) => {
    return numero * 2;
});

console.log(mymap);

let myfilter = numeros2.filter((numero) => {
    return numero != 16;
});

console.log(myfilter);

let myfind = numeros2.find((numero) => {
    return numero == 16;
});

console.log(myfind);
