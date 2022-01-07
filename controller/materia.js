const {response, request}= require('express');


const Materia=require('../models/materia');


const materiasGet = async (req, res= response) => {

  const {desde=0, limit=10}= req.query;

  const query = {estado: true}

  const [total, materias] = await Promise.all([
    Materia.countDocuments(query),
    Materia.find(query)
  .skip(Number(desde))
  .limit(Number(limit))

  ])
    res.json({
      total,
      materias
    })
  }



  const materiasPost = async (req, res= response) => {
      const {nombre_materia, codigoMateria, creditos, tipodemateria}= req.body;
        
      const materia = new Materia({nombre_materia, codigoMateria, creditos, tipodemateria});

      //guardar en la base de datos
      await materia.save();
     

    res.json({
        materia
    })

  }

  const materiasPut = async (req=request, res= response) => {

    const {id}=req.params
  
    const {body}=req.body;

    const materiaAct= Materia.findByIdAndUpdate(id, body, {new: true})

    res.json({
        message:'put API- desde el controlador',
        materiaAct
       
    })
  }

  const materiasDelete = (req, res= response) => {

    res.json({
        message:'delete API- desde el controlador',
        
  })
}





  module.exports = {
    materiasGet,
    materiasPost,
    materiasPut,
    materiasDelete

}