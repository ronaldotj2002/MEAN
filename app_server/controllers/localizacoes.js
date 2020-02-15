// GET HOME
module.exports.homelist = function(req, res) {
    res.render('index', {title: 'Home'});
};

// GET LOCATION INFO
module.exports.locationInfo = function(req, res) {
    res.render('index', {title: 'Informação da Localização'});
};


// GET ADD REVIEW 
module.exports.addReview = function(req, res) {
    res.render('index', {title: 'Adicionar uma avaliação'});
};