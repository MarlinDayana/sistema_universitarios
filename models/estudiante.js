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
    type: String
},

materiasMatriculadas: [{
    type: Schema.Types.ObjectId, ref: 'Materia'
}],
 
semestreActual: [{
    type: Schema.Types.ObjectId, ref: 'Semestre'
}],

estado: {
    type: Boolean,
    default: true
}


});

EstudianteSchema.plugin(require('mongoose-autopopulate'));

// EstudianteSchema.methods.toJSON = function() {
//     const { __v, ...estudiante  } = this.toObject();
//     return estudiante;
// }





module.exports=model('Estudiante', EstudianteSchema);