const Estudiante = require('../models/estudiante');
const Programa = require('../models/programa');

const esProgramaValido = async (programaAcademico ='')=> {
    const existePrograma = await Programa.findOne({programaAcademico});
    if (!existePrograma){
        throw new Error(`El nombre del programa ${programaAcademico} no está registrado en la base de datos`)
    }

}
const  esEmailValido = async (correo='') => { 
    const existeEmail= await Estudiante.findOne({correo});
     if (existeEmail){
       throw new Error(`El correo ${correo} ya está registrado en la base de datos`)
    
   }
}

const  existeEstudianteporID = async (id='') => { 
    const existeEstudiante= await Estudiante.findById(id);
     if (!existeEstudiante){
       throw new Error(`El id ${id} no existe`)
    
   }

}

module.exports ={
    esEmailValido,
    esProgramaValido,
    existeEstudianteporID
}