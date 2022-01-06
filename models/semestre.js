const {Schema, model}=require('mongoose');

const SemestreSchema = Schema({
    numero:{
        type: Number,
        required: [true, 'campo obligatorio']
    },
    materias:{
        type: String,
        required: [true, 'campo obligatorio']
    },
    estudiantes:{
        type: String,
        required: [true, 'campo obligatorio']
    }

});


module.exports= model('Semestre', SemestreSchema)