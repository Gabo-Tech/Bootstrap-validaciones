// alert("ey")

// recoger datos del usuario
const getName= document.querySelector('#name')
const getEmail=document.querySelector('#email')
const getPass1=document.querySelector('#password')
const getPass2=document.querySelector('#password2')

const btn=document.querySelector('#submit')
console.log(btn)

// evento para recoger informacion

btn.addEventListener("submit", getUser);

// funcion para coger datos
function getUser(e){
    e.preventDefault()
    console.log(`Mi nombre es ${getName.value} y mi correo es ${getEmail.value}`)

}



