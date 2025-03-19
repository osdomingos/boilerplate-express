// Carrega as variáveis de ambiente do arquivo .env para configurar o app
require('dotenv').config();

// Importa a biblioteca Express para criar e configurar o servidor web
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para interpretar requisições com corpo no formato JSON
app.use(express.json()); // Necessário para APIs que recebem dados em JSON

// Middleware para interpretar dados enviados por formulários (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: false })); // Substitui o body-parser para formulários simples

// Define o caminho absoluto do arquivo HTML principal que será enviado para o cliente
const absolutePath = __dirname + "/views/index.html";

// Rota principal ('/') que envia o arquivo HTML como resposta
app.get("/", (req, res) => {
    res.sendFile(absolutePath); // Envia o index.html como resposta
});

// Define a pasta onde serão servidos arquivos estáticos como CSS, JS e imagens
const absolutePath2 = __dirname + "/public";
app.use("/public", express.static(absolutePath2));

// Middleware de logging: exibe informações de cada requisição recebida no console
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`); // Loga método, caminho e IP
    next(); // Continua para o próximo middleware ou rota
});

// Rota '/now' que adiciona um timestamp à requisição e retorna a data/hora atual
app.get('/now', (req, res, next) => {
    req.time = new Date().toString(); // Adiciona a data/hora atual na requisição
    next(); // Continua para a próxima função de callback
}, (req, res) => {
    res.send({ time: req.time }); // Envia a data/hora como resposta JSON
});

// Rota dinâmica que captura um parâmetro da URL e retorna um JSON com o valor
app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word }); // Retorna o valor passado na URL como JSON
});

// Rota POST que recebe dados do formulário (first e last) e retorna um JSON com o nome completo
app.post('/name', (req, res) => {
    res.json({ name: `${req.body.first} ${req.body.last}` }); // Retorna o nome concatenado
});

// Exporta o aplicativo para ser usado em outros arquivos ou em testes
module.exports = app;

