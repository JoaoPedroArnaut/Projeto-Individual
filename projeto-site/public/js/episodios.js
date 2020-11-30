var requisicoes = [];
for (var i = 1; i <= 10; i++) {
  var requisicao = fetch(`https://api.jikan.moe/v3/anime/21/episodes/${i}`);
  requisicoes.push(requisicao);
}

var tabela = document.querySelectorAll('td');
var teste = []

Promise.all(requisicoes)
  .then(function (respostas) {
    console.log(respostas);
    return Promise.all(respostas.map(function (resposta) {
      return resposta.json();
    }));
  })
  .then(function (dados) {
    for (var i = 0; i < dados.length; i++) {
      teste.push(dados[i].episodes)
    }
    console.log(teste);
  }).then(function () {
    tabelaCrecente(teste);
  })

function tabelaCrecente(teste) {
  var elemento = document.getElementById("tabela");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
  for (var i = 0; i < teste.length; i++) {
    var episodios = teste[i];
    for (var ii = 0; ii < episodios.length; ii++) {
      montaTabela(episodios[ii])
    }
  }
}

tabelaCrecente(teste);

function tabelaDecresente(teste) {
  var elemento = document.getElementById("tabela");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
  for (var i = (teste.length - 1); i >= 0; i--) {
    var episodios = teste[i];
    for (var ii = (episodios.length - 1); ii >= 0; ii--) {
      montaTabela(episodios[ii])
    }
  }
}


function montaTabela(episodes) {
  var episodesTr = montaTr(episodes);

  var tabela = document.querySelector('tbody');
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