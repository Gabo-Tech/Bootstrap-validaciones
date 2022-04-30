// alert("ey")

// recoger datos del usuario
const getName= document.querySelector('#name')
const getEmail=document.querySelector('#email')
const getPass1=document.querySelector('#password')
const getPass2=document.querySelector('#password2')
const btn=document.querySelector('#form')
// console.log(btn)
const containerUsers=document.querySelector('#all-users')

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

    console.log(`Nuevo usuario — Nombre: ${userFields.name}, correo:${userFields.email}`)
    users.push(userFields);
    console.log("Usuarios recogidos",users)



    // me he quedado aqui y falta imprimir cosas
//     userList.innerHTML = ``;
//   printUsers()

}




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
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8, 100})");
  return re.test(password);
};

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
  // Obtener el elemento del formiulario
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
      showError(getName, 'Name cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
      showError(getName, `Name must be between ${min} and ${max} characters.`)
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
      showError(getEmail, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(getEmail, 'Email is not valid.')
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
      showError(getPass1, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
      showError(getPass1, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
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
      showError(getPass2, 'Please enter the password again');
  } else if (password !== confirmPassword) {
      showError(getPass2, 'Passwords do not match');
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
    getUser();//En este caso la función a realizar es guardar la información del usuario en la array de usuarios 
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
