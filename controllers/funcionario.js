const funcionarioModel = require('../model/funcionarioModel')

module.exports = app => {
    app.get('/Funcionarios',(req,res)=>res.send('Servidor rodsadasdadsadasdsando tudo ok, tudo certo'))

    app.post('/Funcionarios',(req,res)=>{
        console.log(req.body)        
        res.send(funcionarioModel.Adiciona(req.body))
    })
}