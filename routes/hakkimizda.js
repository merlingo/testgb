var express = require('express');
var router = express.Router();

// index page 
router.route('/').get( function(req, res) {
    res.render('pages/hakkimizda',{page_name:"hakkimizda"});
});

module.exports = router;