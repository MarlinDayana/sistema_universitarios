const {Schema, model}=require('mongoose');

const SemestreSchema = Schema({
    numero:{
        type: Number,
        required: [true, 'campo obligatorio'],
        unique: [true]
    },

    // [{ type: Schema.Types.ObjectId, ref: 'teachers' }],
    //  },

    materias:
    [{
        type: Schema.Types.ObjectId, ref: 'Materia'
    }],

    estudiantes:
    [{
        type: Schema.Types.ObjectId, ref: 'Estudiante'
    }],
    estado: {
        type: Boolean,
        default: true
    }

});



SemestreSchema.plugin(require('mongoose-autopopulate')); //esta vaina no funciona

module.exports= model('Semestre', SemestreSchema)