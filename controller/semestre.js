const {response}= require('express');


const Semestre=require('../models/semestre');
//const materia=require('../models/materia');


const semestresGet = async (req, res= response) => {


  const query = {estado: true}

  const [total, semestres] = await Promise.all([
    Semestre.countDocuments(query),
    Semestre.find(query)

  ])
    res.json({
      total,
      semestres

    // EN EL SEMESTRE DEBE IR EL LISTADO DE LAS MATERIAS PROPIAS DEL SEMESTRE pero no se como 

   // const query = {'codigoMateria>=100'}
// const query = materias.find(materias.codigoMateria>=100), 
 
    })
  }



  const semestresPost = async (req, res= response) => {
      const {numero, materias, estudiantes}= req.body;
     
     
   const semestre = new Semestre({numero, materias, estudiantes});

      //guardar en la base de datos
       await semestre.save();
     

    res.json({
        semestre
    })

  }

  // const semestresPut = async (req, res= response) => {

  //   try{
  //     let id = req.params.id;
  //     let {numero, materias, estudiantes} = req.body;
  //     await Semestre.findByIdAndUpdate(id, {numero, materias, estudiantes}, {new: true});
  //     {
  //       where: {id
  //       }
  //     };
  //     res.status(200).send('Semestre actualizado');
  //   }catch(error){
  //     res.status(404).send('algo fallo');
  //   }
    
  // }

  const semestresDelete = async (req, res= response) => {

    //const numero= Materia.numero
    try{
      const id = req.params.id;    
      await Semestre.findByIdAndUpdate(id, {estado:false});
      {
        where: {id
        }
      };
      res.status(200).send('semestre eliminado');
    }catch(error){
      res.status(404).send('fallo algo')
    }
}

const asignarMat = async (req, res) => {

  try{
    const id=req.params.id;

    const {materia}=req.body;
  
  
    await Semestre.findByIdAndUpdate(
      id,
      {
        $push: {materias : materia},
        
    }, { useFindAndModify: false }
    );
    res.status(200).send('materia agregada')

  }catch(error){
    res.status(404).send('algo falló');
  }

  
}





  module.exports = {
    semestresGet,
    semestresPost,
    //semestresPut,
    semestresDelete,
    asignarMat

}