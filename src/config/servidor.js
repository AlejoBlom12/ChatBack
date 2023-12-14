const express = require('express')
const app = express();
const cors = require('cors');
const consultaRoutes = require('../routes/consulta.routes')
const categoriaRoutes = require('../routes/categoria.routes')

const port = 3500;

app.use(cors());
app.use(express.json());
app.use(consultaRoutes)
app.use(categoriaRoutes)

app.set("port", process.env.PORT || port);

module.exports = app;