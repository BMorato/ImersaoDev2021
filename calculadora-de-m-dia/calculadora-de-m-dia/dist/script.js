function calculoNota() {
  var notaPrimeiroBimestre = parseFloat(
    document.getElementById("notadoPrimeiroBimestre").value
  );
  var notaSegundoBimestre = parseFloat(
    document.getElementById("notaDoSegundoBimestre").value
  );
  var notaTerceiroBimestre = parseFloat(
    document.getElementById("notaDoTerceiroBimestre").value
  );
  var notaQuartoBimestre = parseFloat(
    document.getElementById("notaDoQuartoBimestre").value
  );
  var notaFinal =
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    (4).toFixed(1);

  var elementoResultado = document.getElementById("resultado");

  if (notaFinal >= 6) {
    elementoResultado.innerHTML = "Parabéns.Você foi aprovado!Sua média foi " + notaFinal;
  } else {
    elementoResultado.innerHTML = "Que pena.Você foi reprovado. Sua média foi " + notaFinal;
  }
                document.getElementById("conteudo").innerHTML = aprovado}