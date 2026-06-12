//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

let Distancekm = parseFloat(forme_num.get('Distancekm'));
let consumed = parseFloat(forme_num.get('consumed'));
 let prelitro = parseFloat(forme_num.get('prelitro'));
   
let quantcombus = Distancekm / consumed;
let valorTotal = quantcombus * prelitro;


divResultado.innerHTML = "Quantidade de combustível necessária: " + quantcombus.toFixed(2) + " litros\n";
 divResultado.innerHTML = "Valor total a pagar: R$ " + valorTotal.toFixed(2);
     




      


})