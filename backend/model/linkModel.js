const { model, Schema } = require("mongoose");

const LinkScheme = new Schema({
    URL: String, 
    shortURL: String,
    registerDate: String,
});


const LinkModel = model("Link", LinkScheme);
module.exports = LinkModel;