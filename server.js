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

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//lista de doadores: vetor ou array
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Nimue",
        blood: "A+"
    },
    {
        name: "Angel",
        blood: "O-"
    }
]

//configurar a apresentação da página
server.get('/', function(req, res){
    return res.render("index.html", { donors})
})

server.post('/', function(req, res){
//pegar dados do formulario
const name = req.body.name
const email = req.body.email
const blood = req.body.blood

//coloco valores dentro do array,
donors.push({
    name: name,
    blood: blood
})

return res.redirect("/")

})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){//porta
    console.log("iniciei o servidor")
}) 