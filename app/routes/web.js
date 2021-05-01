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
const indexController = require('../http/controllers/index');
const usersController = require('../http/controllers/users');


// routes declarations
module.exports = (app) => {

    // index page routes
    app.get('/', indexController.index);

    // users page routes
    app.get('/user', usersController.read);
    app.post('/user', usersController.create);
    app.put('/user', usersController.update);
    app.delete('/user', usersController.del);
};