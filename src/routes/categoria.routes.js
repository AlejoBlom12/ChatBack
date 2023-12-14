const { Router } = require("express")
const routes = Router()
const { buscarCategoria, eliminarCategoria , guardarCategoria , mostrarCategoria, editarCategoria } = require('../controller/categoria.controller')


routes.get('/listaCategoria', mostrarCategoria)

routes.post('/guardandoCategoria', guardarCategoria)

routes.delete ('/eliminarCategoria/:id', eliminarCategoria)

routes.get ('/categoria', buscarCategoria)

routes.put ('/editarCategoria/:id', editarCategoria )



module.exports = routes