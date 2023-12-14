
const modeloConsulta = require('../models/model.consulta')

const listadoConsulta = async () => {
    return await modeloConsulta.find()
}

const consulta = async () => {
    return await modeloConsulta.findOne()
}

module.exports = { listadoConsulta , consulta }