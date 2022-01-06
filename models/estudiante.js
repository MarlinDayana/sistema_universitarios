const {Schema, model} = require('mongoose');

const EstudianteSchema = Schema ({
 // propiedades de la clase 
 nombre:{
     type: String,
     required: [true, 'el nombre es obligatorio']
 },

 identificacion: {
     type: String,
     required: [true, 'este campo es obligatorio']
 },

 codigo: {
    type: String,
    required: [true, 'este campo es obligatorio']
},

 correo: {
     type: String,
     required: [true, 'este campo es obligatorio'],
     unique: [true]
 },

 programaAcademico: {
    type: String,
    required: [false, 'este campo es obligatorio']
},

materiasMatriculadas: {
    type: String,
    required: [false, 'este campo es obligatorio']
},
 
semestreActual: {
    type: String,
    required: [false, 'este campo es obligatorio']
},

estado: {
    type: Boolean,
    default: true
}


});

EstudianteSchema.methods.toJSON = function() {
    const { __v, ...estudiante  } = this.toObject();
    return estudiante;
}





module.exports=model('Estudiante', EstudianteSchema);