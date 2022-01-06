const {Schema, model}=require('mongoose');

const MateriaSchema = Schema({
    nombre_materia:{
        type: String,
        required: [true, 'El nombre de materia es obligatorio']
    },
    codigoMateria:{
        type: Number,
        required: [true, 'El codigo de materia es obligatorio']
    },
    tipodemateria:{
        type: String
    },
    creditos:{
        type: String
    }

});


module.exports= model('Materia', MateriaSchema)