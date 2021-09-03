const mongoose =  require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
    title:  String,
    post:String,
    date: { type: Date, default: Date.now },   
});

module.exports = mongoose.model('Post', PostSchema);