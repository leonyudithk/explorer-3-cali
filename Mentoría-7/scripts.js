console.log("....");

let objetoAuto = {};

// opción 2 para agregar claves y valores al objeto

(objetoAuto.año = 2023),
  (objetoAuto.marca = "mazda"),
  (objetoAuto.colorAuto = "Blanco");

console.log(objetoAuto);

// Validar si dentro de objetoAuto existe una propieda llamada modelo

let modelo = objetoAuto.hasOwnProperty("color");
let marcas = objetoAuto.hasOwnProperty("marca");

console.log(objetoAuto.año, objetoAuto.marca);

//desestructurar
const { año, marca, colorAuto } = objetoAuto;
console.log(año, marca);

//=====================Arrays=======================================//

let animales = ["gato", "perros", "elefantes", "ardillas"];
console.log(animales.length);
console.table(animales);

for (let index = 0; index < animales.length; index++) {
  console.log(animales[index], "index: ", index);
}

// Métodos de Arrays

// Añadir elementos al final

animales.push("elefantes", "tarantulas", "osos");
console.table(animales);

// elimine el último elemento del arrays
animales.pop();
console.table(animales);

// Añadir elementos al inicip

animales.unshift("Patos", "focas");
console.table(animales);

// eliminar el primer elemento del arrays
animales.shift();
console.table(animales);

//la posición de un elemento.  IndexOf
let indexAnimal = animales.indexOf("osos");
console.log(indexAnimal);
indexAnimal = animales.indexOf("perros");
console.log(indexAnimal);

// Para buscar un elemento especifico, Includes
let elementoIncluido = animales.includes("Patos");
console.log("Se incluye Patos: ", elementoIncluido);

elementoIncluido = animales.includes("gato");
console.log("Se incluye Gato: ", elementoIncluido);

// Slice -  hace una copia del array y devuelve del inicio hasta el final
let slice = animales.slice(2, 6);
console.log("la copia de slice", slice);
console.log("original de slice", animales);

//Splice, modifica en el arrays original, elimina un elemento y lo remplaza por otro

const resultSplice = animales.splice(1, 1, "Pollos");
console.log(resultSplice);
console.table(animales);

// Recorrido del arrays
console.log("Estoy desde el .ForEach");
animales.forEach((anima, index) => {
  console.log(anima, "index: ", index);
});

console.log("Estoy desde el .Map");
animales.map((element, index) => {
  console.log(element, "index: ", index);
  if (element === "elefantes") {
    console.log("Encontre un mamifero");
  }
});

//--------------busquedas----------------------//
// find devuelve el primer elemento que conicida con la condicion y se devuelve
const resultFind = animales.find((item) => item === "elefantes");
console.log("Encontro un mamifero: ", resultFind);


// devuelve un arrays con todas los elementos que coincidan con la 
// condición y ahce el recorrido completo del arrays
const resulFilter = animales.filter((item) => item === "elefantes");
console.log("Encontro algunos  mamiferos: ", resulFilter);
