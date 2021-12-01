function suma(a, b) {
    console.log(a + b);
    //this.
}

//variable funcion
const suma2 = function (a, b) {
    console.log(a + b);
}

//funciones flecha
const suma3 = (a, b) => {
    console.log(a + b);
}

const suma4 = (a, b) => console.log(a + b);

const obj = (nombre) => (
    {
        id: 1,
        nombre: nombre
    });

//console.log(obj("Juan"));

//------------------------------------------------------

const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

let persona2 = persona;
//operador spread
persona2 = { ...persona };

persona2.nombre = "Pedro";

console.log(persona);
console.log(persona2);

//desestructuracion de objetos
const { nombre } = persona2;

const numeros = [1, 2, 3];

const [num1, num2, num3] = numeros;
console.log(num1);

//console.log(nombre);
//console.log(apellido);

const fuc1 = ({ nombre, apellido }) => {
    console.log(nombre, apellido);
}

fuc1(persona);

//-------------------------------------------------------
// syncronous and asyncronous

const promesa = new Promise((resolve, reject) => {
    //simular respuesta de servidor
    try {
        setTimeout(() => {
            resolve("resultado del servidor");
        }, 3000);

    } catch (error) {
        reject(error);
    }
    //reject("error en la peticion");
});

promesa.then(resultado => {
    console.log("resultado => " + resultado);
}).catch(error => {
    console.log("error => " + error);
});

console.log("fin");

//---------------------
//Asyc Await
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function

const consultarProductos = async () => {

    //simular respuesta de servidor
    console.log("inicio");
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resultado del servidor");
        }, 4000);
    });

      let result = await promesa; 
      //espera a que termine la promesa   
      console.log(result + " - " + new Date());
}

consultarProductos();
console.log("fin");

//DOM
//-------------------------------------------------------

//const elements = document.getElementsByClassName("table");
//const elements = document.getElementsByTagName("h1");
//const element = document.getElementById("titulo2");

//element.innerHTML = "Nuevo titulo";
//element.style.color = "red";
//element.style.backgroundColor = "yellow";

//const elements = document.querySelector("#titulo2");
const elements = document.querySelectorAll("p");

//elements.innerHTML = "Nuevo titulo";
for (const elemento of elements) {
    //elemento.innerHTML = "Hola mundo";
    //elemento.style.color = "red";
    console.log(elemento);
}













