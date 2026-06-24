 // responsável por verificar os dados digitados
        function validar() {

            // Pega o valor digitado no campo código
            let codigo = document.getElementById("codigo").value;

            // Pega o valor digitado no campo senha
            let senha = document.getElementById("senha").value;

            // Verifica se o código e a senha estão corretos
            if (codigo == "ABCD1234" && senha == "1234") {

                // Mensagem quando os dados estão corretos
                alert("ACESSO PERMITIDO");

            } else {

                // Mensagem quando os dados estão incorretos
                alert("ACESSO NEGADO");

            }
        }