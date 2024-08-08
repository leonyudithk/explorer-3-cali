const registerForm = document.getElementById("registerForm");

//------------Manipulación del Formulario de Registro de Usuario------------------------------//
registerForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // creo el objeto
  const user = {
    name,
    email,
    password,
  };

  // crear un arrays
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  //  JSON.parse(localStorage.getItem("usuarios")) ?  users = JSON.parse(localStorage.getItem("usuarios")) : users = [];
  // validar si el correo esta rgistrado

  const userExists = users.some((user) => user.email === email);

  if (!userExists) {
    users.push(user);
    // enviar al localStorage
    localStorage.setItem("usuarios", JSON.stringify(users));
    alert("Registrado exitosamente, Puedes iniciar sesión");
    registerForm.reset();
    window.location.href="../index.html"
  } else {
    alert("Este correo ya se encuentra registrado");
  }
});


//-----------------Iniciar sesión--------------//

const loginForm = document.getElementById("loginForm");

loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  //traigo lo que esta guardado en el localStorage
  let users = JSON.parse(localStorage.getItem("usuarios")) 

  // Buscar que loq ue ingrese en el correo y la contraseña este guarda en el localstorage
  const buscarUser = users.find(user => user.email === email && user.password === password)

  if (buscarUser) {
    localStorage.setItem("perfilActual", JSON.stringify(buscarUser));
    window.location.href = "../pages/home.html";
  } else {
    alert("Correo o contraseña incorrectos-");
  }
});