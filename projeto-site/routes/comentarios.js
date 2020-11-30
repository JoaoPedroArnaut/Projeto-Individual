var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Comentarios = require('../models').Comentarios;

router.post('/comentaNoBanco', function(req, res, next) {
	Comentarios.create({
		comentario: req.body.msg,
		avatar: req.body.avatar,
		apelido: req.body.apelido
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

router.get('/pegaComentariosNoBanco', function(req, res){
	Comentarios.findAll().then(resposta => {
		res.json(resposta);
	})
})




module.exports = router;