const { getTodosArtigos, getArtigoPorId, insertArtigo, updateArtigo, deletaArtigoPorId} = require("../servicos/artigo")

function getArtigos(req, res) {
    try {
        const artigos = getTodosArtigos()
        res.send(artigos)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function getArtigo(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const artigo = getArtigoPorId(id)
            res.send(artigo)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postArtigo(req, res) {
    try {
        const artigoNovo = req.body

        if(req.body.nome) {
            insertArtigo(artigoNovo)
            res.status(201)
            res.send("Artigo inserido com sucesso.")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório.")
        }   
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchArtigo(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const body = req.body
            updateArtigo(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteArtigo(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            deletaArtigoPorId(id)
            res.send("Artigo excluído com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getArtigos,
    getArtigo,
    postArtigo,
    patchArtigo,
    deleteArtigo
}