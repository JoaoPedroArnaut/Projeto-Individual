var request = new XMLHttpRequest();

request.open('GET', 'https://api.jikan.moe/v3/anime/21/episodes/1');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    var converte = JSON.parse(request.responseText);
    var episodios = converte.episodes;
    episodios.forEach(episodio => {
      montaTabela(episodio)
    });
  }
};

request.send();


var request2 = new XMLHttpRequest();

request2.open('GET', 'https://api.jikan.moe/v3/anime/21/episodes/2');

request2.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    var converte = JSON.parse(request2.responseText);
    var episodios = converte.episodes;
    episodios.forEach(episodio => {
      montaTabela(episodio);
    });
  }
};

request2.send();


function montaTabela(episodes) {
  var episodesTr = montaTr(episodes);

  var tabela = document.querySelector('table');
  tabela.appendChild(episodesTr);
}


function montaTd(dado,classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function montaTr(episodes) {
  var episodesTr = document.createElement('tr');

  episodesTr.appendChild(montaTd(episodes.episode_id,'numeroEp'));
  episodesTr.appendChild(montaTd(episodes.title,'nada'));
  episodesTr.appendChild(montaTd(fillers(episodes.filler),fillers(episodes.filler)));

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