const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("artigos.json"))
const novoDado = {id: '4', nome: "Coroutines"}

fs.writeFileSync("artigos.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("artigos.json")))