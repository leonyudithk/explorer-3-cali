let Estudiantes = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEstu");
  // crear el Arrays

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // capturar los datos de los input
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const nota = Number(document.getElementById("nota").value);

    console.log(nombre, apellido, edad, nota);

    // Crear el Objeto

    let objEstudiante = {
      nombre,
      apellido,
      edad,
      nota,
    };

    Estudiantes.push(objEstudiante);
    form.reset();
    console.table(Estudiantes);
  });

  //   document.getElementById("btnListar").addEventListener("click", () => {
  //     const divResult = document.getElementById("result");

  //     Estudiantes.forEach((element) => {
  //       const { nombre, apellido, edad, nota } = element;
  //       divResult.innerHTML = `
  //         <h3>Nombre: ${nombre} ${apellido} tiene ${edad} de edad y su nota es: ${nota}</h3>
  //         `;
  //     });
  //   });
});

const listarEstudiantes = () => {
  const divResult = document.getElementById("result");

  Estudiantes.forEach((element) => {
    const { nombre, apellido, edad, nota } = element;
    divResult.innerHTML = `
        <h3>Nombre: ${nombre} ${apellido} tiene ${edad} de edad y su nota es: ${nota}</h3>
        `;
  });
};

