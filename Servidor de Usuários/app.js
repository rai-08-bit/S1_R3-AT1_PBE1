const express = require(`express`); // Para importar o Express e utilizar suas funcionalidades

const app = express(); // Esta constante é responsável por configurar o servidor Back-end
const PORT = 8080; // Contante responsável por configurar a porta que o servidor estará sendo utilizado

// Finalização do servidor, esta deve ser sempre a ÚLTIMA LINHA DO CÓDIGO!
app.listen(PORT, ()=>{
    console.log(`O seu servidor de usuários está rodando na porta ${PORT}`);
});