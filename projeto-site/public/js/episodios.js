
var requisicoes = [];
for (var i = 1; i <= 10; i++) {
   var requisicao = fetch(`https://api.jikan.moe/v3/anime/21/episodes/${i}`);
   requisicoes.push(requisicao);
}
Promise.all(requisicoes)
.then(function (respostas) {
  return Promise.all(respostas.map(function (resposta) {
		return resposta.json();
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