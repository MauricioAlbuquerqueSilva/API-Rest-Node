const funcionarioModel = require('../model/funcionarioModel')

module.exports = app => {
    app.get('/Funcionarios/:id',(req,res)=>res.send('Servidor rodsadasdadsadasdsando tudo ok, tudo certo'+req.params.id))

    app.post('/Funcionarios',(req,res)=>{            
        funcionarioModel.Adiciona(req.body,res)
    })
}