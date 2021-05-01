/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

const express   = require('express');
const conf      = require('../config');

/**
 * express app instance
 */
const app  = express();

/**
 * execute middleware array
 */
 app.use(require("../http/middleware"));

/**
 * load web routes
 */
require('../routes/web')(app);

/**
 * load api routes
 */
require('../routes/api')(app);

/**
 * set view engine
 */
app.set('view engine', 'ejs');

/**
 * set views path
 */
app.set('views', conf.path.views);

/**
 * serve static files
 */
app.use('/static', express.static(conf.path.public));


// 404 needs better way to implement error pages
app.use(function(req, res, next){
    res.status(404).render('error/404', { url: req.originalUrl });
});

// exports
module.exports.app = app;