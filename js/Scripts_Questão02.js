//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultados')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

    let lar = parseFloat (forme_num.get('lar'))
    let alt = parseFloat (forme_num.get('alt'))
    let are = parseFloat (forme_num.get('are'))


    let area = alt * lar
    let ltinta = area / 2 

    divResultado.innerHTML = `Esta é a area a ser pintada ${area.toFixed(2)}m2`
    divResultado.innerHTML =  `Sera necessária essa quantidade de tinta${ltinta.toFixed(2)} litros`





      


})