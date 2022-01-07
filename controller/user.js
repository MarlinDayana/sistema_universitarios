const {request, response}= require('express');


const Estudiante=require('../models/estudiante');


const usuariosGet = async (req=request, res= response) => {

  const {desde=0, limit=10}= req.query;

  const query = {estado: true}

  const [total, estudiantes] = await Promise.all([
    Estudiante.countDocuments(query),
    Estudiante.find(query)
  .skip(Number(desde))
  .limit(Number(limit))

  ])
    res.json({
      total,
      estudiantes
    })
  }



  const usuariosPost = async (req, res= response) => {
      const {nombre, identificacion, codigo, correo, semestreActual, materiasMatriculadas, programaAcademico}= req.body;
      const estudiante = new Estudiante({nombre, identificacion, codigo, correo, semestreActual, materiasMatriculadas, programaAcademico});


      //guardar en la base de datos
      await estudiante.save();

    res.json({
        message:'post API- desde el controlador',
        estudiante
    })

  }

  const usuariosPut = async (req=request, res= response) => {

    // try {
    //   const {_id} = req.params.id;
    //   const {body}=req.body;
 
    //   const estudiante = await Estudiante.findByIdAndUpdate(_id, body, {new: true});
 
    //  res.json({
    //      message:'put API- desde el controlador',
    //      estudiante
    //  })
    // }catch(error){
    //   console.log(error)
    //   throw new Error('no se puede actualizar el usuario');
    // }

    try{
      let id = req.params.id;
      let {nombre, identificacion, correo}=req.body;
      await Estudiante.findByIdAndUpdate(id, {nombre, identificacion, correo},  {new: true});
      {
        where: {id
        }
      };
      res.status(200).send('estudiante actualizado');
    }catch(error){
      res.status(404).send('no se puede actualizar el estudiante');
    }
   
  }

  const usuariosDelete = async (req, res= response) => {

    try{
      const id = req.params.id;    
      await Estudiante.findByIdAndUpdate(id, {estado:false});
      {
        where: {id
        }
      };
      res.status(200).send(`estudiante eliminado`);
    }catch(error){
      res.status(404).send('fallo algo')
    }

   

    //-//-//INTENTOS FALLIDOS

    //const estudianteeliminado = Estudiante.findByIdAndDelete(id);

    //const borrarEstudiante= Estudiante.findByIdAndUpdate(id, {estado:false});

    // res.json({
    //     message:'delete API- desde el controlador',
    //     //borrarEstudiante
    //     estudianteeliminado
    // })

    //-//-//INTENTOS FALLIDOS

  
  }

  const usuariosPatch = (req, res= response) => {
    res.json({
        message:'patch API- desde el controlador'
    })
  }





  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

}