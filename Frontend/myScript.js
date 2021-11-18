window.onload = function() {

    console.log("cargado");
}
//const dato = "Dato";
//dato = "NyDato";


// es funcion suma 2 numeros
function suma(valor1, valor2) {
    return valor1 + valor2;
}

let result = suma(10, 20);

if (result < 30) {
    console.log("resultado menor a 30");
}
else if(result > 30) {
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



