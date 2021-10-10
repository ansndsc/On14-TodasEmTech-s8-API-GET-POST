const express = require("express");
const app = express();

app.get("/oi", (request, response) => {
    response .status(200).json(["Salve, Mundão!"])
})

app.get("/frutas", (request, response) => {
    response.status(200).json(["jaca", "banana", "morango", "melancia"])
})

app.listen(8083, () => {
    console.log("eita, meu servidor está rodando na porta 8083.")
}) 