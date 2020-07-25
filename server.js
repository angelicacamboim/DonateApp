//npm i nodemon vai monitar a app inteira
//npm i nunjucks - template de aplicações
//configurando o servidor
const express = require("express")
const server = express() //funcionalidade 

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))


//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

//configurar a apresentação da página
server.get('/', function(req, res){
    return res.render("index.html")
})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){//porta
    console.log("iniciei o servidor")
}) 