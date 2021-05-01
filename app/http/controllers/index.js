/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */
const conf = require('../../config');

const index = (req, res) => {

    return res.render("index/index", {link : conf.link});

};



// exports here
module.exports.index = index;