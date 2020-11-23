let login_usuario;
let nome_usuario;
let avatar_usuario;
let id_usuario;


function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    id_usuario = sessionStorage.id_usuario_meuapp = json.id;
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    avatar_usuario = sessionStorage.avatar_usuario_meuapp
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        username.innerHTML = nome_usuario;
        if(avatar_usuario == 1){
            img.src = '/img/avatares/luffy.jpg';
        }else if (avatar_usuario == 2){
            img.src = 'img/avatares/zoro.jpg';
        } else {
            img.src = 'img/avatares/Sanji.png'
        }
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}