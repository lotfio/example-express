/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

const path = require('path');

module.exports = {
 
    "views"       : path.join(path.dirname(__dirname), "views"),
    "controllers" : path.join(path.dirname(__dirname), "http", "controllers"),
    "storage"     : path.join(path.dirname(__dirname), "storage"),
    "public"      : path.join(path.dirname(path.dirname(__dirname)), "public")
};
