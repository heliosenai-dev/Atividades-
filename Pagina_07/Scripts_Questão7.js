// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

// CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formDados);

    // Pegando os valores 
    let numero = parseFloat(formData.get('numero'));
 

  

    // Cálculo 
    let restum = numero % 3
    let restdois = numero % 7


    if (restum == 0 && restdois ==0 ) {
        divResultado.innerHTML = ` É divisivel por 3 e 7 `
    } else   {
        divResultado.innerHTML = `Não é divisel `}
 
});