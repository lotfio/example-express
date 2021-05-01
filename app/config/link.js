/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

 const app = require('./app');

 module.exports = {
  
    "assets"    :  app.host + ":" + app.port + '/static/assets/',
    "css"       :  app.host + ":" + app.port + '/static/assets/css/',
 }; 