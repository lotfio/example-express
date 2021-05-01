/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */


// actions
const read   = (req, res) => res.render("users/read");
const create = (req, res) => res.send("create users");
const update = (req, res) => res.send("update users");
const del    = (req, res) => res.send("del users");




// exports
module.exports.read   = read;
module.exports.create = create;
module.exports.update = update;
module.exports.del    = del;