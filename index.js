const customExpress = require('./config/customExpress') 
const app = customExpress()
const db = require('./infra/conexao') 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(3000,() => console.log('Servidor Rodando na porta 3000'))
});      