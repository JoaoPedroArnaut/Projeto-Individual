var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    montaMsg(form);
});


function montaMsg(form){
    var divContainer = document.createElement('div');
    divContainer.classList.add('container');
    var divComentario = document.createElement('div');
    divComentario.classList.add('comentario');
    var imgComentario = document.createElement('img');
    var divBalaoComentario = document.createElement('div');
    divBalaoComentario.classList.add('balaoComentario')

    var main = document.querySelector('main');
    main.appendChild(divContainer);
    divContainer.appendChild(divComentario);
    divComentario.appendChild(imgComentario);
    divComentario.appendChild(divBalaoComentario);
    divBalaoComentario.textContent = form.msg.value;
    imgComentario.src = form.img.src;
}