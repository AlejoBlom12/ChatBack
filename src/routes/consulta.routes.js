const { Router } = require("express")
const routes = Router()
const { mostrarConsulta, guardarConsulta, buscarConsulta, eliminarConsulta , editarConsulta } = require('../controller/consulta.controller')


routes.get('/listaConsultas', mostrarConsulta)

routes.post('/guardandoConsulta', guardarConsulta)

routes.delete ('/eliminarConsulta/:id', eliminarConsulta)

routes.put ('/editarConsulta/:id' , editarConsulta)




module.exports = routes