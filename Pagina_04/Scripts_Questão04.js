//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultados')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const forme_num = new FormData(formDados)

// O usuário informa o nome e as 3 notas
let aluno = ("Digite o nome do aluno:");
let nota1 = parseFloat(("Digite a primeira nota:"));
let nota2 = parseFloat(("Digite a segunda nota:"));
let nota3 = parseFloat(("Digite a terceira nota:"));
// Calculo de notas
let media = nota1 + nota2 + nota3 / 3;
// Decisão 
    if (media >= 6) {
        document.getElementById("resultado").innerHTML = " aprovado "}
     else {
        document.getElementById("resultado").innerHTML = " reprovado "}
    
   

})
