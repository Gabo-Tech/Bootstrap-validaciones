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

btn.addEventListener('submit', getUser);

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




