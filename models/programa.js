const {Schema, model}=require('mongoose');

const ProgramaAcademSchema = Schema({
    programaAcademico:{
        type: String,
        required: [true, 'El nombre del programa academico es obligatorio']
    }

});


module.exports= model('Programa', ProgramaAcademSchema)