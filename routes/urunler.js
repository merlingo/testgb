var express = require('express');
var router = express.Router();

// index page 
router.route('/').get( function(req, res) {
    res.render('pages/urunler',{page_name:"urunler"});
});

module.exports = router;