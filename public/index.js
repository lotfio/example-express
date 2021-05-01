/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

const kernel    = require('../app/bootstrap/kernel');
const conf      = require('../app/config');

// starting server
kernel.app.listen(conf.app.port, () => {
    console.log(`Example app listening at http://localhost:${conf.app.port}`)
});