//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

let  a = parseFloat(forme_num.get('a'));
let b = parseFloat(forme_num.get('b'));
 let c = parseFloat(forme_num.get('c'));

 if (a == b && b == c) {
    divResultado.innerHTML= (" Equilatero ")}

else if (a == b || a == c || b == c) {
    divResultado.innerHTML = ("Isósceles.")}

 else{
 divResultado.innerHTML = ("Escaleno.")
}


})