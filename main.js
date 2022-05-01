// alert("ey")

// recoger datos del usuario
const getName= document.querySelector('#name')
const getEmail=document.querySelector('#email')
const getPass1=document.querySelector('#password')
const getPass2=document.querySelector('#password2')
const btn=document.querySelector('#form')
// console.log(btn)


//Constantes para recoger los mensajes de error con bootstrap
const blankName = document.getElementById('name-alert-empty');
const wrongName = document.getElementById('name-alert-wrong');
const blankEmail = document.getElementById('email-alert-empty');
const wrongEmail = document.getElementById('email-alert-wrong');
const blankPassword = document.getElementById('password-alert-empty');
const wrongPassword = document.getElementById('password-alert-wrong');
const blankPassword2 = document.getElementById('password2-alert-empty');
const wrongPassword2 = document.getElementById('password2-alert-wrong');

//Constante para coger el mensage de guardado con exito
const signUpSuccesful = document.getElementById('form-success');

//Array para almacenar toda la info de los usuarios o array de usuarios. 
let users =[]

// evento para recoger informacion

//btn.addEventListener('submit', getUser); Añadido en la función de validar toda la información para guardar los datos ya validados.

// funcion para coger datos
function getUser(e){
    e.preventDefault()

    let userFields = {
        name: getName.value,
        email: getEmail.value,
        password1: getPass1.value,
        password2: getPass2.value
      };

    console.log(`Nuevo usuario — Nombre: ${userFields.name}, correo:${userFields.email}`);

    users.push(userFields);
    localStorage.setItem("users", JSON.stringify(users));
    //Línea añadida para guardarlo en localStorage

};



//Validación de la información del formulario.

//Funciones utilitarias. 

//Función para comprobar que el input no está vacío.
const isRequired = value => value === '' ? false : true;

//Función para marcar cantidad mínima y máxima de caractéres.
const isBetween = (length, min, max) => length < min || length > max ? false : true;

//Función para validar email con RegEx (Regular Expression).
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//Función para comprobar la contraseña.
const isPasswordSecure = (password) => {
  //                    Regex comprobando que la contraseña tenga minusculas, mayusculas, números, lista de caractéres especiales y entre 8 y 100 caractéres
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

//Función para cambiar la visibilidad de los elementos. 
const showAndHide = (element) => element.style.display == 'block' ? element.style.display = 'none' : element.style.display = 'block';

//Funciones de feedback, estas funciones 
//añaden una clase de css (todavía por defniir con boostrap) 
//para mostrar si la operación se realizó correctamente o si dió error.
const showError = (input, message) => {
  // Obtener el elemento del formiulario
  const formField = input.parentElement;
  // añadir la clase del error
  formField.classList.remove('success');
  formField.classList.add('error');
  // mostrar el mensaje de error
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = (input) => {
  // Obtener el elemento del formulario
  const formField = input.parentElement;
  // eliminar la clase del error
  formField.classList.remove('error');
  formField.classList.add('success');
  // esconder el mensaje de error
  const error = formField.querySelector('small');
  error.textContent = '';
}

//Función de validación de nombre de usuario. La función devuelve True si el input pasa todos los textos
const checkUsername = () => {
  let valid = false;
  const min = 2,
      max = 10;
  const username = getName.value.trim();
  if (!isRequired(username)) {
      //showError(getName, 'Name cannot be blank.');
      showAndHide(blankName);
      setTimeout(function() {showAndHide(blankName)}, 3000);
      console.log("this is blank name inside checkusername function"+blankName);
  } else if (!isBetween(username.length, min, max)) {
      //showError(getName, `Name must be between ${min} and ${max} characters`);
      showAndHide(wrongName);
      setTimeout(function() {showAndHide(wrongName)}, 3000);
      console.log("this is wrong name inside checkusername function"+wrongName);
  } else {
      showSuccess(getName);
      valid = true;
  }
  return valid;
}

/*Función de validación de email
Esta función devuelve True si el email es válido.
Utiliza las funciones utilitarias anteriores de isRequired() y isEmailValid() */
const checkEmail = () => {
  let valid = false;
  const email = getEmail.value.trim();
  if (!isRequired(email)) {
      //showError(getEmail, 'Email cannot be blank.');
      showAndHide(blankEmail);
      setTimeout(function() {showAndHide(blankEmail)}, 3000);
  } else if (!isEmailValid(email)) {
      //showError(getEmail, 'Email is not valid.');
      showAndHide(wrongEmail);
      setTimeout(function() {showAndHide(wrongEmail)}, 3000);
  } else {
      showSuccess(getEmail);
      valid = true;
  }
  return valid;
}

/*Función de validación de contraseña utilizando funciones utilitarias. */
const checkPassword = () => {
  let valid = false;
  const password = getPass1.value.trim();
  if (!isRequired(password)) {
      //showError(getPass1, 'Password cannot be blank.');
      showAndHide(blankPassword);
      setTimeout(function() {showAndHide(blankPassword)}, 3000);
  } else if (!isPasswordSecure(password)) {
      //showError(getPass1, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
      showAndHide(wrongPassword);
      setTimeout(function() {showAndHide(wrongPassword)}, 3000);
  } else {
      showSuccess(getPass1);
      
      valid = true;
  }
  return valid;
};

/*Función para validar el campo de confirmar contraseña. */
const checkConfirmPassword = () => {
  let valid = false;
  // Comprobar la confirmación de la contraseña
  const confirmPassword = getPass2.value.trim();
  const password = getPass1.value.trim();
  if (!isRequired(confirmPassword)) {
      //showError(getPass2, 'Please enter the password again');
      showAndHide(blankPassword2);
      setTimeout(function() {showAndHide(blankPassword2)}, 3000);
  } else if (password !== confirmPassword) {
      //showError(getPass2, 'Passwords do not match');
      showAndHide(wrongPassword2);
      setTimeout(function() {showAndHide(wrongPassword2)}, 3000);
  } else {
      showSuccess(getPass2);
      valid = true;
  }
  return valid;
};

//Función para validar el formulario al dar submit o enviar con event listener utilizando todas las funciones anteriores. 
btn.addEventListener('submit', function (e) {
  e.preventDefault();
  // validación
  let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();
  let isFormValid = isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;
  // acciones a tomar una vez la información validada (enviar la información a la otroa página y mostrarla  en pantalla)
  if (isFormValid) {
    getUser(e);//En este caso la función a realizar es guardar la información del usuario en la array de usuarios
    showAndHide(signUpSuccesful);  
    setTimeout(function() {showAndHide(signUpSuccesful)}, 3000);
    setTimeout(function() {window.location.assign("http://127.0.0.1:5500/usuarios.html")}, 3000);
    ;
  }
});

//Función para validar elementos sobre la marcha y no esperar a que el usuario de submit

btn.addEventListener('input', function (e) {
  switch (e.target.id) {
      case 'name':
          checkUsername();
          break;
      case 'email':
          checkEmail();
          break;
      case 'password1':
          checkPassword();
          break;
      case 'password2':
          checkConfirmPassword();
          break;
  }
});