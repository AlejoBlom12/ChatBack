
const { respuesta } = require ('../helper/respuesta')
const modelCategoria = require('../models/model.categoria');
const modelConsulta = require('../models/model.consulta');


const controlador = {}



controlador.editarCategoria = async ( req, res ) => {

  try {

    const id = req.params.id;
    const categoriaEdit = req.body; 
    
    const categoria = await modelCategoria.findByIdAndUpdate({ _id: id }, { $set: categoriaEdit });
    
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = categoria
    respuesta1.editado = categoriaEdit

    res.status(200).send(respuesta1);
    
  } catch (error) {
    console.error('Error al actualizar:', error);

    respuesta.status = "500"
    respuesta.message = "No se ha podido actualizar correctamente."
    respuesta.data = error

    res.status(500).send(respuesta);
  }
}



controlador.mostrarCategoria = async (req, res) => {
  
    try{
      const categorias = await modelCategoria.find()
      res.json(categorias)
    }catch(err){
      res.status(500).json({ Error: error.message})
    }
  }
  


  controlador.buscarCategoria = async (req, res) => {
  
    try {
      const  id = req.params.id
      const categoria = await modelCategoria.findOne(id)
      
      if (!categoria) {
        respuesta.status = 404;
        respuesta.message = "Categoria no encontrado.";
        respuesta.data = categoria;
        return res.status(404).send(respuesta);
      }else{
        respuesta.status = 200;
        respuesta.message = "Categoria encontrada exitosamente.";
        respuesta.data = categoria
        res.status(200).send(respuesta);
        res.json(categoria)
      }
     
    }catch(err){
      res.status(500).json({ Error: error.message})
    }
  }
  


  controlador.eliminarCategoria = async (req , res) => {
    try {
      const idParam = req.params.id;
      const eliminado = await modelCategoria.findByIdAndDelete(idParam);
  
      respuestaE.status = "200";
      respuestaE.message = "Se ha eliminado con éxito.";
      respuestaE.Eliminado = eliminado;
      res.status(200).send(respuestaE);
    
  
    } catch (error) {
      console.error('Error al eliminar:', error);
      respuesta.status = "500";
      respuesta.message = "No se ha podido eliminar correctamente.";
      respuesta.data = error;
      res.status(500).send(respuesta);
    }
  }
  


  controlador.guardarCategoria = async (req, res) =>{
    try{
      const body = req.body;
      const newCategoria = new modelCategoria(body);
      await newCategoria.save();
      
      respuesta.status = 200;
      respuesta.message = "La Categoria se ha guardado con exito.";
      respuesta.data = body;
  
      res.status(200).send(respuesta);
    } catch (error) {
      const errorsCatch = error.errors;
      const errors = {};
  
      for (let i in errorsCatch) {
          errors[i] = errorsCatch[i].message;
        }
    
        respuesta.status = 500;
        respuesta.message = "Ocurrio un error, la categoria no se ha podido guardar.";
        respuesta.data = errors;
        
        res.status(500).json(respuesta);
      }
  }
  
  
  module.exports = controlador
