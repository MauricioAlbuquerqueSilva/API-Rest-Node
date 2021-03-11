const conexao = require('../infra/conexao')
const mongoose = require('mongoose')

class FuncionarioModel {
   Adiciona(funcionario,response){
        var schema = mongoose.Schema({
            nome: String,
            cargo:String,            
            cpf: Number,
            dataNascimento :Date
          });                    
        var Model = mongoose.model("Model", schema, "Funcionario");          
        var doc1 = new Model({  nome: funcionario.nome,
                                cargo:funcionario.cargo,            
                                cpf: funcionario.cpf,
                                dataNascimento :new Date(funcionario.dataNascimento)});     
        doc1.save( err => {
            if(err){
                response.status(400).json("Não foi possivel cadastrar o funcionário")
            }else{
                response.status(201).json(doc1)
            }
        })                          
    }

    Listar(){
    }

    Listar(id){
    }
}
module.exports = new FuncionarioModel