const { Schema, model, SchemaType} = require('mongoose')

const categoriaSchema = new Schema ({
    referencia: { type: String,
    required: [true, 'La referencia es obligatorio.']
},
    nombre: {type: String,
    required: [true, 'Nombre es obligatorio']
},
    descripcion: {type: String,
    required: [true, 'La descripcion es obligatoria']
}
})

module.exports = model('categoria' , categoriaSchema , 'categorias')