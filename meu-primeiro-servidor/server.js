const express = require("express"); //passo 1 - chamar o express pro nosso projeto

const app = express(); //passo 2 - executei o express

/*Ex.1 GET: */
app.get("/oi", (request, response) => {
    response.status(200).json(["Salve, mundão!"])
}) //passo 4 - configurando a primeira rota. get é funcao de leitura. Configurando uma requisição. Configurei uma rota, que vai ser pelo método get, e a rota vai ser "oi", e essa rota vai ter uma request e uma response. Primeiro a request e segundo a response SEMPRE
//http://localhost:8080/oi , localhost quer dizer que o meu servidor é o pc. O bloco de execucao vai ser enviar pro client uma resposta(response), onde tem um status.

/*Ex.2 GET: */
app.get/*escolho o metodo*/("/lista"/*dentro do get configuro a rota.*/, (request, response/*abro uma arrow function e dentro dela passo o request e responde como parâmetro.*/) => {
    response.status(200).json(["Jaca","Banana", "Morango", "Melancia", "Abacaxi","Jujuba"])
})




// passo 3 - criar uma rota para iniciar o servidor. Então, PRIMEIRO(depois, apenas de chamar e executar o express), tenho que criar uma porta para esse servidor. Sempre deixar na ultima linha do codigo.
app.listen(8080, () => {
    console.log("Eita, meu servidor ta rodando na porta 8080.")
}) //criando a porta. estou usando meu computador local como meu servidor. Um pedaço da memória, enumerada 8080, está guardando a informação que está no meu arquivo.


/*
path params: o dado, o caminho é colocado direto na rota.
query params: no esquema chave e valor. 
*/
/*
DUVIDAS:


*/