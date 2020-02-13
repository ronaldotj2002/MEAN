var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); // cria uma dependência com o arquivo de controlador chamado main


router.get('/', ctrlMain.index); // cria uma referência ao métido index do crontrolador main na definição de rota

module.exports = router;
