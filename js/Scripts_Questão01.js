//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

    let num1 = parseFloat (forme_num.get('num1'))
    let num2 = parseFloat (forme_num.get('num2'))
    let num3 = parseFloat (forme_num.get('num3'))


    let media = parseFloat(num1 + num2 + num3) / parseFloat(3)

    divResultado.innerHTML = `A média do dos números ${media.toFixed(2).replace('.',',')}`



      


})