//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

    let Distancekm = parseFloat (forme_num.get('Distancekm'))
    let consumed = parseFloat (forme_num.get('consumed'))
    let prelitro = parseFloat (forme_num.get('prelitro'))

   


    let media = parseFloat(lar*alt) / parseFloat(2)

    divResultado.innerHTML = `A medida do s números ${media.toFixed(2).replace('.',',')}`





      


})