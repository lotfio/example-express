/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

// controllers declarations
const indexController = require('../http/api/controllers/index');

// routes declarations
module.exports = (app) => {
    // index page routes
    app.get('/api/', indexController.index);
};