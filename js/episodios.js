
var requisicoes = [];
for (var i = 1; i <= 10; i++) {
   var requisicao = fetch(`https://api.jikan.moe/v3/anime/21/episodes/${i}`);
   requisicoes.push(requisicao);
}
console.log();
var ep = [1,2]
Promise.all(requisicoes)
.then(function (resposta) {
  return Promise.all(resposta.map(function (response) {
		return response.json();
	}));
})
.then(function (dados) {
  console.log(dados);
  for(var i = 0;i < dados.length;i++){
    var episodios = dados[i].episodes;
  episodios.forEach(episodio => {
    montaTabela(episodio)
  })
  }
  
  
})



// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//     var converte = JSON.parse(request.responseText);
//     var episodios = converte.episodes;
//     episodios.forEach(episodio => {
//       montaTabela(episodio)
//     });
//   }
// };


function montaTabela(episodes) {
  var episodesTr = montaTr(episodes);

  var tabela = document.querySelector('table');
  tabela.appendChild(episodesTr);
}


function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function montaTr(episodes) {
  var episodesTr = document.createElement('tr');

  episodesTr.appendChild(montaTd(episodes.episode_id, 'numeroEp'));
  episodesTr.appendChild(montaTd(episodes.title, 'nada'));
  episodesTr.appendChild(montaTd(fillers(episodes.filler), fillers(episodes.filler)));

  return episodesTr;
}

function fillers(ep) {
  var verificaFiler = ep;
  var cannon = 'cannon';
  var filler = 'filler';
  if (!verificaFiler) {
    return cannon;
  } else {
    return filler;
  }
}