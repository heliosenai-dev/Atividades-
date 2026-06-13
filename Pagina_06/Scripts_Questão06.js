// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

// CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formDados);

    // Pegando os valores 
    let nome = formData.get('nome'); 
    let peso = parseFloat(formData.get('peso'));
    let alt = parseFloat(formData.get('alt'));

  

    // Cálculo do IMC
    let imc = peso / (alt * alt);

    if (imc < 20) {
        divResultado.innerHTML = `Paciente ${nome} está abaixo do peso. (IMC: ${imc.toFixed(2)})`;
    } else if (imc >= 20 && imc < 25) {
        divResultado.innerHTML = `Paciente ${nome},  está com peso normal. (IMC: ${imc.toFixed(2)})`;
    } else if (imc >= 25 && imc < 30) {
        divResultado.innerHTML = `Paciente ${nome}, está com excesso de peso. (IMC: ${imc.toFixed(2)})`;
    } else if (imc >= 30 && imc <= 35) {
        divResultado.innerHTML = `Paciente ${nome},  está com obesidade. (IMC: ${imc.toFixed(2)})`;
    } else {
        divResultado.innerHTML = `Paciente ${nome}, está com obesidade mórbida. (IMC: ${imc.toFixed(2)})`;
    }
});