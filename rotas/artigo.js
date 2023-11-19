const {Router} = require("express")
const {getArtigos, getArtigo, postArtigo, patchArtigo, deleteArtigo} = require("../controladores/artigo")

const router = Router()

router.get('/', getArtigos)

router.get('/:id', getArtigo)

router.post('/', postArtigo)

router.patch('/:id', patchArtigo)

router.delete('/:id', deleteArtigo)

module.exports = router