
const mongoose = require("mongoose");
const uri = "mongodb+srv://tuguldur:5mKrEA5j9jI5qVIE@cluster0.7cfvyfl.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);
const connect= async () => {
    try {
        await mongoose.connect(uri);
        console.log(("database is successfully connected"));
    } catch(error) {
        console.log(error);
    }
};

module.exports = connect;