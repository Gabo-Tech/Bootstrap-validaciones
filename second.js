// alert("ey")
const listadoUsuarios=document.querySelector('#all-users')
console.log(listadoUsuarios) 
let infoUser = JSON.parse(localStorage.getItem("users")) ;
console.log(infoUser)

function printUsers(){
    listadoUsuarios.innerHTML += ``
    let infoUser = JSON.parse(localStorage.getItem("users"));

        for(let i = 0; i < infoUser.length; i++){
      
          listadoUsuarios.innerHTML += `
                                  <div class="col-sm-6">
                                      <div class="card">
                                        <div class="card-body">
                                          <h5 class="card-title">
                                            ${infoUser[i].name}</h5>
                                          <p class="card-text">
                                            ${infoUser[i].email}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                                    `
        }
        
      }

    window.onload = function() {
        printUsers ()
  };