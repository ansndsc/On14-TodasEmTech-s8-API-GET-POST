//PAREI EM 2h21min SABADO 2 PARTE

const filmesJson = require("./ghibli.json");//dentro do require coloco o caminho pro meu dado.
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json()); //Está fazendo o Body Parse

/*
1- Quero poder consultar uma lista dos filmes da ghibli por titulo, id e tambem a lista completa.
2 - se o usuario digitar errado o nome do filme quero retorno do erro.
3 - quero poder cadastrar um novo filme.
*/

app.get("/", (request, response) => {
    response.status(200).json(
        [
            {
                "mensagem": "API de filmes Ghibli da turma On14"
            }
        ]
    );
})

app.get("/filmes",(request, response) => {
    response.status(200).send(filmesJson); //só coloca.json se precisar transformar em json. Coloca o .send quando é so pra enviar. 
})

app.get("/filmes/:id"/*Esses dois pontos significa que agr o que for enviado depois do "/filmes", o meu código vai entender que é um id e vai usar esse ":id" para fazer a pesquisa. Ex. de URL: localhost:8081/filmes/4. Esse 4 é a id que eu quero encontrar. */,(request, response) => {
    
    let idRequest = request.params/*params é uma palavra reservada. Uma chave do Json, assim como body e parser.*/.id; //id que ta vindo da request

    let filmeEncontrado/*coloquei essa busca dentro da variável "filmeEncontrado"*/ = filmesJson.find(filme => filme.id == idRequest);//encontra a primeira coisa que se identifica com o que eu to pesquisando e retorna. Lógica da estrutura vai ser: "encontre um filme cujo o id é igual ao id enviado na request.(filme => filme.id == id enviado na request)"

    response.status(200).send(filmeEncontrado/*Passei a variável da busca. Posso colocar a estrutura da busca direto aqui dentro ou coloca-la em uma variável, como fiz aqui.*/);

})

app.post("/filmes/criar", (request, response) => {
    let tituloRequest = request.body.title;
    let descricaoRequest = request.body.description;

    let novofilme = {
        title: tituloRequest,
        description: descricaoRequest
    }; 
})

app.listen(8081, () => {
    console.log("alo, pepe moreno? to na porta 8081.");
})

/*

EXPLICAÇÕES
filmesJson.find(filme => filme.id == idRequest) De onde vem esse "filme" na arrow function? R. > Por baixo do find, assim como por  baixo do filter e afins, ta rolando um for. O for percorre um por um de uma lista. A POSIÇÃO das declarações é a chave, assim como no caso da "(request, response). O find está percorrendo uma array. Na primeira posição do find é o apelido que eu vou dar para o item da minha array. Pode ser qualquer nome. Estou apelidando cada item do objeto e  solicitando o seguinte: Compare o id de cada item com o id que foi mandado na request."

BODY PARSE: 
Parsear > A ação de uma análise de uma cadeia de string, vai separar, dizer o que é o que para poder manipular.


*/

/*

Dúvidas:
O body do post tem a ver com o body do HTML?

*/