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

    

     try{
      let id = req.params.id;
      let {nombre_materia, codigoMateria, creditos, tipodemateria}=req.body;
      await Materia.findByIdAndUpdate(id, {nombre_materia, codigoMateria, creditos, tipodemateria}, {new: true});
      {
        where: {id
        }
      };
      res.status(200).send('Materia actualizada');
    }catch(error){
      res.status(404).send('algo fallo');
    }
    // const materiaAct= Materia.findByIdAndUpdate(id, body, {new: true})

    // res.json({
    //     message:'put API- desde el controlador',
    //     materiaAct
       
    // })
  }

  const materiasDelete = async (req, res= response) => {

    try{
      const id = req.params.id;    
      await Materia.findByIdAndUpdate(id, {estado:false});
      {
        where: {id
        }
      };
      res.status(200).send(`materia eliminada`);
    }catch(error){
      res.status(404).send('fallo algo')
    }

  
}





  module.exports = {
    materiasGet,
    materiasPost,
    materiasPut,
    materiasDelete

}