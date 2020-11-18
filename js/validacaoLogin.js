var form = document.querySelector('form');
var ul = document.querySelector('#menssagemErro')

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(form);
    var usuario = cadastro(form);
    console.log(usuario);
    var erros = validaUsuario(usuario);
    if (erros.length > 0) {
        exibeErro(erros);
        return;
    } else {
        ul.classList.add('invisivel');
    }
})

function cadastro(form) {
    var novoUsuario = {
        email: form.email.value,
        senha: form.senha.value,
    }
    return novoUsuario;
}

function validaUsuario(usuario) {
    var erro = [];

    if (usuario.email == '') {
        erro.push('O email não pode estar em branco.');
    } 

    if (usuario.senha == '') {
        erro.push('A senha não pode estar em branco.');
    }

    return erro;
}

function exibeErro(erros) {
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li)
    });
    ul.classList.remove('invisivel');
}