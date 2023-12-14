
const modeloCategoria = require('../models/model.categoria')

const listaCategoria = async () => {
    return await modeloCategoria.find()
}

const categoria = async () => {
    return await modeloCategoria.findOne()
}

module.exports = { listaCategoria , categoria }