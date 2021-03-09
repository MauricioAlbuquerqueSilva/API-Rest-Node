const conexao = require('../infra/conexao')
const mongoose = require('mongoose')

class FuncionarioModel {
    Adiciona(funcionario){
        var schema = mongoose.Schema({
            name: String,
            age: Number
          });
          
          var Model = mongoose.model("model", schema, "Funcionarios");
          
          var doc1 = new Model({ name: "John", age: 21 });
          
          doc1.save(function(err, doc) {
            if (err) return console.error(err);
            console.log("Document inserted succussfully!");
          });      
    }
}
 module.exports = new FuncionarioModel