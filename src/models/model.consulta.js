const { Schema, model, SchemaType} = require('mongoose')

const consultaSchema = new Schema ({

    referencia: {type: Number,
    required: [true, 'La referenia es obligatoria']
},
    pregunta: {type: String,
    required: [true, 'Pregunta invalida']
},
    respuesta: {type: String,
    required: [true, 'Respuesta invalida']
},
    titular: {type: String,
    required: [true, 'Titular invalido']
},
    // categoria: {type: Schema.Types.ObjectId,
    // ref: "categorias",
    // required: [true, 'Categoria es obligatoria.'] 
// },
    fecha: {type: Date,
    default : Date.now
    }
})

module.exports = model('consulta' , consultaSchema , 'consultas')