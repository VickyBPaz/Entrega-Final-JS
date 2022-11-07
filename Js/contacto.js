// // FORMULARIO
const formulario = document.getElementById("formulario")

let emails = []
const guardarEmail = (e) => {
    e.preventDefault()
    let nombre = e.target.children[0].value;
    let apellido = e.target.children[1].value;
    let mail = e.target.children[2].value 
    emails.push({
    nombre: nombre,
    apellido: apellido, 
    mail: mail
  })
  Swal.fire(
    'OK!',
      'tus datos han sido enviados correctamente!',
      'success'
    )
console.log(emails);  
}
formulario.addEventListener("submit", (e) => guardarEmail(e))