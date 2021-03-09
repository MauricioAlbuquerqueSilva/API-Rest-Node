const customExpress = require('./config/customExpress') 
const app = customExpress()
const client = require('./infra/conexao')
client.connect(err => {
    if(err){
        console.log('Erro ao conectar:'+err)
        client.close();
    }else{
        console.log('Conectado com sucesso')
        app.listen(3000,() => console.log('Servidor Rodando na porta 3000'))
    }               
});    