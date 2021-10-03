var numeroSecreto = parseInt(Math.random() * 11);

var numeroTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Digite um número somente entre 0 e 10";
  } else if (numeroTentativas > 0) {
    numeroTentativas--;
  }

  if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "O número é menor." + numeroTentativas + " tentativas restante.";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "O número é maior. " + numeroTentativas + " tentativas restante.";
  }

  if (numeroTentativas == 0) {
    elementoResultado.innerHTML =
      "Game over! O número secreto era " + numeroSecreto;
  }
}