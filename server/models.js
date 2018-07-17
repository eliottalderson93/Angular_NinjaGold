const mongoose = require('mongoose');
module.exports = function(){
    var PlayerSchema = new mongoose.Schema({
        gold: {type:Number,required:true,default:0},
        logs: [{type:String,required:true}]
    },{timestamps:true});
    mongoose.model('Player',PlayerSchema);
    var Player = mongoose.model('Player');
}