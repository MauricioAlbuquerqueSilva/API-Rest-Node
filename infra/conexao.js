const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://maumau:maumau@cluster0.a4qrr.mongodb.net/Estudos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = client
