var requisicoes = [];
for (var i = 1; i <= 10; i++) {
  var requisicao = fetch(`https://api.jikan.moe/v3/anime/21/episodes/${i}`);
  requisicoes.push(requisicao);
}

var tabela = []

Promise.all(requisicoes)
  .then(function (respostas) {
    console.log(respostas);
    return Promise.all(respostas.map(function (resposta) {
      return resposta.json();
    }));
  })
  .then(function (dados) {
    console.log(dados);
    console.log(dados[0]);
    for (var i = 0; i < dados.length; i++) {
      tabela.push(dados[i].episodes);
    }
    tabelaCrecente(tabela);
  })

function tabelaCrecente(tabela) {
  var elemento = document.getElementById("tabela");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
  for (let i = 0; i < tabela.length; i++) {
    var episodio = tabela[i];
    for (let ii = 0; ii < episodio.length; ii++) {
      montaTabela(episodio[ii]);
    }
  }
}

function tabelaDecresente(tabela) {
  var elemento = document.getElementById("tabela");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
  for (let i = (tabela.length - 1); i >= 0; i--) {
    var episodio = tabela[i];
    for (let ii = (episodio.length - 1); ii >= 0; ii--) {
      montaTabela(episodio[ii]);
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