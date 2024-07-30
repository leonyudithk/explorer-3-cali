const input = document.querySelectorAll("input");

const nombre = document.querySelector("#nombre").value;
const nombre2 = document.getElementById("nombre").value;

const edad = document.querySelector(".edad").value;
const edad2 = document.getElementsByClassName("edad").value;

console.log(input);

console.log(nombre);
console.log(nombre2);

console.log(edad);
console.log(edad2);

const body = document.querySelector("body");

// Manipular el Dom con los atributos del main y quiero cambiar el estilo

body.style.background = "green";
body.style.textAlign = "center";
body.style.margin = "10%";

// Agregar o crear un nuevo elemento en el DOM
// 1- Crear el elemento
// 2- Manipular o asignar el atributo y/o en contenid
// 3- insertar en el DOM - appendChild()

const titulo = document.createElement("h1");
titulo.textContent = "Bienvenido chicos";
body.appendChild(titulo);

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvgt4O7bdc3ZlDEvYvma4MmUh_by2nZrV0A&s"
);
body.appendChild(img);

// innertHTML

body.innerHTML += ` 
<h1>Está en prueba</h1>
    <input placeholder= "Ingrese dato"/>`;

//---------------------------Funciones--------------------------//

function suma() {
  const numero1 = Number(document.getElementById("n1").value);
  const numero2 = Number(document.getElementById("n2").value);

  const sumar = numero1 + numero2
  console.log("El resultado es: ", sumar);
}



