var express = require('express');
var router = express.Router();

// index page 
router.route('/').get( function(req, res) {
    res.render('pages/hizmetler',{page_name:"hizmetler"});
});

module.exports = router;