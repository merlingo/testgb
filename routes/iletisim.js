var express = require('express');
var router = express.Router();

// index page 
router.route('/').get( function(req, res) {
    res.render('pages/iletisim',{page_name:"iletisim"});
});

module.exports = router;