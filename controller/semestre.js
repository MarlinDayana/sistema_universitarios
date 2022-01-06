const {response}= require('express');


const Semestre=require('../models/semestre');
//const Materia=require('../models/materia');


const semestresGet = async (req, res= response) => {



    // EN EL SEMESTRE DEBE IR EL LISTADO DE LAS MATERIAS PROPIAS DEL SEMESTRE pero no se como 

   // const query = {'codigoMateria>=100'}
// const query = materias.find(materias.codigoMateria>=100), 
 
    res.json({
        message:'Get API- desde el controlador',
    })
  }



  const semestresPost = async (req, res= response) => {
      const {numero, materias, estudiantes}= req.body;
     
     
   const semestre = new Semestre({numero, materias, estudiantes});

      //guardar en la base de datos
       await semestre.save();
     

    res.json({
        message:'post API- desde el controlador',
        semestre
    })

  }

  const semestresPut = async (req, res= response) => {

    res.json({
        message:'put API- desde el controlador',
       
    })
  }

  const semestresDelete = (req, res= response) => {

    res.json({
        message:'delete API- desde el controlador',
        
  })
}





  module.exports = {
    semestresGet,
    semestresPost,
    semestresPut,
    semestresDelete

}