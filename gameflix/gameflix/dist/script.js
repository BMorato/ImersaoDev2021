//lista de jogos - array
var listaJogos = [
  "https://psverso.com.br/wp-content/uploads/2020/06/Horizon-Forbidden-West-key-art.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/1/12/DiabloIIIcover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/f/f4/The_Last_of_Us_Remastered.png",
  "https://upload.wikimedia.org/wikipedia/pt/7/7e/God_of_War_2_capa.png"
];

//adicionando novos elementos
//listaJogos.push("Call of Duty");

//h1 e strong
//document.write("<p>" + listaJogos[0] + "</p>");
for (var i = 0; i < listaJogos.length; i++) {
  document.write("<img src=" + listaJogos[i] + ">");

  function inserir() {
    // inserir url
    var urlNovoJogo = String(document.getElementById("imagem").value);

    //inserindo
    listaJogos.push(urlNovoJogo);

    var tamanhoListaJogos = listaJogos.length - 1;

    //printa
    document.body.innerHTML +=
      "<img class=campeoes src=" + listaJogos[tamanhoListaJogos] + ">";
  }
}