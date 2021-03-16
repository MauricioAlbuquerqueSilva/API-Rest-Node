const funcionarioModel = require('../model/funcionarioModel')

module.exports = app => {
    app.get('/Funcionarios',(req,res)=>{
        funcionarioModel.Listar(res)        
    })

    app.get('/Funcionarios/:id',(req,res)=>{
        funcionarioModel.ListarPorId(res,req)        
    })

    app.post('/Funcionarios',(req,res)=>{            
        funcionarioModel.Adiciona(req.body,res)
    })

    app.patch('/Funcionarios/:id',(req,res)=>{            
        funcionarioModel.Editar(req,res)
    })

    app.delete('/Funcionarios/:id',(req,res)=>{            
        funcionarioModel.Deletar(req,res)
    })
}