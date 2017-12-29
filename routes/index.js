var express = require('express');
var router = express.Router();

// index page 
router.route('/').get( function(req, res) {
    res.render('pages/index',{page_name:"index"});
});

module.exports = router;
