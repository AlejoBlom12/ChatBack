const modeloConsulta = require("../models/model.consulta")
const { respuesta } = require("../helper/respuesta");
const { respuesta1 } = require("../helper/respuestaEdit");
const { respuestaE } = require("../helper/eliminar");



const controlador = {}



controlador.editarConsulta = async ( req, res ) => {

  try {

    const id = req.params.id;
    const consultaEdit = req.body; 
    
    const consulta = await modeloConsulta.findByIdAndUpdate({ _id: id }, { $set: consultaEdit });
    
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = consulta
    respuesta1.editado = consultaEdit

    res.status(200).send(respuesta1);
    
  } catch (error) {
    console.error('Error al actualizar:', error);

    respuesta.status = "500"
    respuesta.message = "No se ha podido actualizar correctamente."
    respuesta.data = error

    res.status(500).send(respuesta);
  }
}


controlador.mostrarConsulta = async (req, res) => {
  
  try{
    const consultas = await modeloConsulta.find()
    res.json(consultas)
  }catch(err){
    res.status(500).json({ Error: error.message})
  }
}


controlador.eliminarConsulta = async (req , res) => {
   try {
    const idParam = req.params.idConsult;
    const eliminado = await modeloConsulta.findByIdAndDelete(idParam);

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


controlador.guardarConsulta = async (req, res) =>{
  try{
    const body = req.body;
    const newConsulta = new modeloConsulta(body);
    await newConsulta.save();
    
    respuesta.status = 200;
    respuesta.message = "La consulta se ha guardado con exito.";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, la consulta no se ha podido guardar.";
      respuesta.data = errors;
      
      res.status(500).json(respuesta);
    }
}


module.exports = controlador