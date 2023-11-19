const fs = require("fs")

function getTodosArtigos() {
    return JSON.parse(fs.readFileSync("artigos.json"))
}

function getArtigoPorId(id) {
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))

    const artigoFiltrado = artigos.filter(artigo => artigo.id === id) [0]
    return artigoFiltrado
}

function insertArtigo(artigoNovo) {
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))
    const novaListaDeArtigos = [...artigos, artigoNovo]
    fs.writeFileSync("artigos.json", JSON.stringify(novaListaDeArtigos))
}

function updateArtigo(modificacoes, id) {
    let artigosAtuais = JSON.parse(fs.readFileSync("artigos.json"))
    const indiceModificado = artigosAtuais.findIndex(artigo => artigo.id === id)

    const conteudoMudado = {...artigosAtuais[indiceModificado], ...modificacoes}
    artigosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("artigos.json", JSON.stringify(artigosAtuais))    
}

function deletaArtigoPorId(id) {
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))
    const artigosFiltrados = artigos.filter(artigo => artigo.id !== id)
    fs.writeFileSync("artigos.json", JSON.stringify(artigosFiltrados))
}

module.exports = {
    getTodosArtigos,
    getArtigoPorId,
    insertArtigo,
    updateArtigo,
    deletaArtigoPorId
}