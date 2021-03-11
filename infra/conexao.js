const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://maumau:maumau@cluster0.hmmrh.mongodb.net/Estudos?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});     
module.exports = mongoose.connection;
