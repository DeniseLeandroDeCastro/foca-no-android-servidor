const express = require("express")
const rotaArtigo = require("./rotas/artigo")

const app = express()
app.use(express.json())
app.use("/artigos", rotaArtigo)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})