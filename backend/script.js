/* Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo da requisição e como resposta retorne esse objeto no formato json padrão.

OBS: utilize a plataforma de API que você preferir. */

/*  No diretório backend 
  comando: node script.js
  comando: npm start  */



const express = require('express');
const app = express();

app.use(express.json());


app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});


app.post('/:objeto', function(req, res) {
  const objeto = req.body;

  res.json(objeto);
  console.log(objeto)
})



