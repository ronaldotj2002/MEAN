var express = require('express');
var router = express.Router();
var ctrlLocalizacoes = require('../controllers/localizacoes');
var ctrlOutros = require('../controllers/outros');


router.get('/', ctrlLocalizacoes.homelist);
router.get('/localizacao', ctrlLocalizacoes.locationInfo);
router.get('/avaliacao/nova', ctrlLocalizacoes.addReview);
router.get('/sobre', ctrlOutros.sobre);

module.exports = router;
