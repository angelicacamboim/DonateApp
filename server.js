//npm i nodemon vai monitar a app inteira
//npm i nunjucks - template de aplicações
//npm i pg - conexão com BD
//configurando o servidor
const express = require("express")
const server = express() //funcionalidade 

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//habilitar body do formulário
server.use(express.urlencoded({extended: true}))

//configurar a conexão com o banco
const Pool = require('pg').Pool //conexão que vai permanecer ativa
const db = new Pool({
    user: 'postgres',
    password: '9910advinha',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})



//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//configurar a apresentação da página
server.get('/', function(req, res){
    db.query("SELECT * FROM donors", function(err, result){
        if(err) return res.send("Erro de banco de dados.")
    
        const donors = result.rows 
        console.log(donors)
        return res.render("index.html", { donors })

    })
})

server.post('/', function(req, res){
//pegar dados do formulario
const name = req.body.name
const email = req.body.email
const blood = req.body.blood

if(name == "" || email == "" | blood == ""){
return res.send("Todos os campos são obrigatórios.")
}

//coloco valores dentro do banco de dados
const query = `INSERT INTO donors ("name", "email", "blood") 
VALUES ($1, $2, $3)`

const values = [name, email, blood]

db.query(query, values, function(err){
if(err) return res.send("erro no banco de dados")

return res.redirect("/")

})

})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){//porta
    console.log("iniciei o servidor")
}) 