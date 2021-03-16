const conexao = require('../infra/conexao')
const mongoose = require('mongoose')
mongoose.set('debug', true);
const moment = require('moment')

const schema = mongoose.Schema({
    nome: String,
    cargo:String,            
    cpf: Number,
    dataNascimento :Date,
    dataCadastro : Date
  });                    

const Model = mongoose.model("Model", schema, "Funcionario");  

class FuncionarioModel {
   Adiciona(funcionario,response){    
        const dataValida =  moment().diff(moment(funcionario.dataNascimento,'DD/MM/YYYY'), 'years') > 18   
        const funcionariovalido =  funcionario.nome.length > 5   
        const validacoes = [
            {
                nome :'DataNacimento',
                valido : dataValida,
                mensagem:'Para cadastrar um funcionário é necessário que o mesmo tenha idade superior a 18 anos de idade'
            },
            {
                nome :'Nome do Funcionário',
                valido : funcionariovalido,
                mensagem:'Para cadastrar um funcionário é necessário que o nome tenha no minimo 5 caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        if(erros.length){
            response.status(400).json(erros)
        }else{
            var doc1 = new Model({  nome: funcionario.nome,
                cargo:funcionario.cargo,            
                cpf: funcionario.cpf,
                dataNascimento :moment(funcionario.dataNascimento,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
                dataCadastro:moment()});     
            doc1.save( err => {
                if(err){
                    response.status(400).json("Não foi possivel cadastrar o funcionário"+err)
                }else{
                    response.status(201).json(doc1)
                }
            })
        }                                    
    }

    Listar(res){     
        Model.find({},(err,result)=>{
            if(err){
                res.status(500).json({Menssagem:"Não foi possivel efetuar a listagem"})
            }else{
                res.status(200).json(result)
            }
        })           
    } 

    ListarPorId(res,req){    
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {        
            Model.findOne({_id : req.params.id},(err,result)=>{
                if(err){
                    res.status(500).json({Menssagem:"Não foi possivel efetuar a listagem "+err})
                }else{
                    res.status(200).json(result)
                }
            }) 
        } else{
            res.status(400).json({Menssagem:"Objeto não está em um formato valido"})
        }               
    }
    
    Editar(req,response){
        let funcionario = req.body;
        const dataValida =  moment().diff(moment(funcionario.dataNascimento,'DD/MM/YYYY'), 'years') > 18   
        const funcionariovalido =  funcionario.nome.length > 5   
        const validacoes = [
            {
                nome :'DataNacimento',
                valido : dataValida,
                mensagem:'Para Editar um funcionário é necessário que o mesmo tenha idade superior a 18 anos de idade'
            },
            {
                nome :'Nome do Funcionário',
                valido : funcionariovalido,
                mensagem:'Para Editar um funcionário é necessário que o nome tenha no minimo 5 caracteres'
            },
            {
                nome:'Id',
                valido: req.params.id.match(/^[0-9a-fA-F]{24}$/),
                mensagem:'Id não encontrado'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        if(erros.length){
            response.status(400).json(erros)
        }else{
            Model.findByIdAndUpdate({_id:req.params.id},
                {  
                    nome: funcionario.nome,
                    cargo:funcionario.cargo,            
                    cpf: funcionario.cpf,
                    dataNascimento :moment(funcionario.dataNascimento,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
                    dataCadastro:moment()
                },(err) => {
                    if(err){
                        response.status(400).json("Não foi possivel atualizar o funcionário"+err)
                    }else{
                        response.status(201).json(funcionario)
                    }
                });              
        }                
    }

    Deletar(req,res){
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {        
            Model.findOneAndDelete({_id : req.params.id},(err,result)=>{
                if(err){
                    res.status(500).json({Menssagem:"Não foi possivel deletar o funcionário "+err})
                }else{
                    res.status(200).json(result)
                }
            }) 
        } else{
            res.status(400).json({Menssagem:"Funcionário não encontrado"})
        } 
    }
}
module.exports = new FuncionarioModel