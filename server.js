//nodemon vai monitar a app inteira
const express = require("express")
const server = express() //funcionalidade 

//http://127.0.0.1:3000/
server.get('/', function(req, res){
    return res.send("ok, cheguei aqui")
})
server.listen(3000, function(){//porta
    console.log("iniciei o servidor")
}) 