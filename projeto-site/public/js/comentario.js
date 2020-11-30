var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    comentaNoBanco();
    buscaComentarios();
});

function buscaComentarios() {
    fetch("/comentarios/pegaComentariosNoBanco").then(comentarios => {
        return comentarios.json();
    }).then(comentarioo => {
        for (var i = (comentarioo.length - 1); i >= 0; i--) {
            if (i == (comentarioo.length - 1)) {
                comentarios.innerHTML = '';
                if(form.msg.value != ''){
                    montaMsg(form.msg.value, form.avatar.value, form.apelido.value);
                }
            }
            montaMsg(comentarioo[i].comentario, comentarioo[i].avatar,comentarioo[i].apelido)
        }
        msg.value = '';
    });
}

function comentaNoBanco() {
    var formulario = new URLSearchParams(new FormData(formComentario));
    fetch("/comentarios/comentaNoBanco", {
        method: "POST",
        body: formulario
    });
}


function montaMsg(conteudoDamensagem, avatar, nick) {
    var divContainer = document.createElement('div');
    divContainer.classList.add('container');
    var divComentario = document.createElement('div');
    divComentario.classList.add('comentario');
    var imgComentario = document.createElement('img');
    var divPerfil = document.createElement('div');
    divPerfil.classList.add('perfil')
    var label = document.createElement('label');
    var divBalaoComentario = document.createElement('div');
    divBalaoComentario.classList.add('balaoComentario')

    var main = document.querySelector('.comentarios');
    main.appendChild(divContainer);
    divContainer.appendChild(divComentario);
    divComentario.appendChild(imgComentario);
    divComentario.appendChild(divPerfil)
    divPerfil.appendChild(label);
    divPerfil.appendChild(divBalaoComentario);
    label.textContent = nick;
    divBalaoComentario.textContent = conteudoDamensagem;

    var img;
    if (avatar == 1) {
        img = '/img/avatares/luffy.jpg';
    } else if (avatar == 2) {
        img = 'img/avatares/zoro.jpg';
    } else {
        img = 'img/avatares/Sanji.png'
    }

    imgComentario.src = img;
}