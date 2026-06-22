  function calcular() {

            // Recebe os dados digitados
            let produto = document.getElementById("produto").value;
            let compra = parseFloat(document.getElementById("compra").value);

            let venda;

            // Verifica a faixa de preço e calcula o lucro
            if (compra < 10) {
                venda = compra + (compra * 0.70);
            }
            else if (compra <= 30) {
                venda = compra + (compra * 0.50);
            }
            else if (compra <= 50) {
                venda = compra + (compra * 0.40);
            }
            else {
                venda = compra + (compra * 0.30);
            }

            // Mostra o resultado
            alert(
                "Produto: " + produto +
                "\nValor de Venda: R$ " + venda.toFixed(2)
            );
        }