var form = document.querySelector('form');

var ul = document.querySelector('#menssagemErro')


form.addEventListener("submit", function (e) {
    e.preventDefault();
    var usuario = cadastro(form);
    console.log(usuario);
    var erros = validaUsuario(usuario);
    if (erros.length > 0) {
        exibeErro(erros);
        return;
    } else {
        ul.classList.add('invisivel');
        cadastrar();
    }
});

function cadastro(form) {
    var novoUsuario = {
        avatar: form.avatar.value,
        nome: form.nome.value,
        apelido: form.apelido.value,
        email: form.email.value,
        comfirmacaoEmail: form.comfirmacaoEmail.value,
        senha: form.senha.value,
        comfirmacaoSenha: form.comfirmacaoSenha.value,
    }
    return novoUsuario;
}

function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            window.location.href='login.html';

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            finalizar_aguardar();
        }
    });

    return false;
}

function validaUsuario(usuario) {
    var erro = [];

    if (usuario.nome == '') {
        erro.push('O nome não pode estar em branco.');
    }
    if (usuario.apelido == '') {
        erro.push('O apelido não pode estar em branco.');
    }

    if (usuario.email == '' || usuario.comfirmacaoEmail == '') {
        if (usuario.email == '') {
            erro.push('O email não pode estar em branco.');
        }
        if (usuario.comfirmacaoEmail == '') {
            erro.push('A comfirmação de email não pode estar em branco.');
        }
    } else if (usuario.email.indexOf('@') < 0 || usuario.comfirmacaoEmail.indexOf('@') < 0) {
        if (usuario.email.indexOf('@') < 0) {
            erro.push('o email deve conter um @.');
        }
        if (usuario.comfirmacaoEmail.indexOf('@') < 0) {
            erro.push('A comfirmação de email deve conter um @.');
        }
    } else if (usuario.email != usuario.comfirmacaoEmail) {
        erro.push('A comfirmação de email não confere.');
    }


    if (usuario.senha == '' || usuario.comfirmacaoSenha == '') {
        if (usuario.senha == '') {
            erro.push('A senha não pode estar em branco.');
        }
        if (usuario.comfirmacaoSenha == '') {
            erro.push('A comfirmação de senha não pode estar em branco.');
        }
    } else if (usuario.senha != usuario.comfirmacaoSenha) {
        erro.push('A comfirmação de senha não confere.');
    } else if(!(usuario.senha.length >= 8)) { 
        erro.push('A senha deve ter no minimo 8 digitos.');
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