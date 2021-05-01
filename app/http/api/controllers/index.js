/**
 * Learning express js 
 * This is a custom mvc framework built on top express
 * 
 * @author  lotfio lakehal
 * @license MIT
 * @version 0.1.0
 * 
 */

 const index = (req, res) => {

    return res.json("hello from api index");

};



// exports here
module.exports.index = index;