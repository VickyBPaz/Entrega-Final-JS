// // FORMULARIO
const formulario = document.getElementById("formulario")

let emails = []
const guardarEmail = (e) => {
e.preventDefault()
console.log(e.target.children);
let nombre = e.target.children[0].value;
  let apellido = e.target.children[1].value;
  let mail = e.target.children[2].value 
  emails.push({
    nombre: nombre,
    apellido: apellido, 
    mail: mail
  })
console.log(emails);  
}
formulario.addEventListener("submit", (e) => guardarEmail(e))