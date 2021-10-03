function calcular(){
  var valorEmReal = parseFloat(document.getElementById("real").value);
  
  if (document.getElementById("checkboxdolar").checked){
    var valorEmDolar = (valorEmReal / 5.34).toFixed(2);
    var resultado = "O valor em dólar é: " + valorEmDolar;
  }else{
    if(document.getElementById("checkboxeuro").checked){
      var valorEmEuro = (valorEmReal / 6.25).toFixed(2);
      var resultado = "O valor em Euro é: " + valorEmEuro;
    }
    else{
      var valorIene = (valorEmReal / 0.048).toFixed(8);
      var resultado = "O valor em Iene é: " + valorIene;
    }
  }
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = resultado;
}