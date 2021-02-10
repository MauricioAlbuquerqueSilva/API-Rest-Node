const express = require('express')
const app = express()
app.listen(3000,() => console.log('Servidor rodando na porta 3000'))
app.get('/GestaoClientes',(req,res)=>res.send('Servidor rodando tudo ok, tudo certo'))