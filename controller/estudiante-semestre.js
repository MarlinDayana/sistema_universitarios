const {response, request}= require('express');



const estudiantessemestreGet = async (req=request, res= response) => {

  //const {desde=0, limit=10}= req.query;

  const query = {codigo}

  const {codigo}= req.query

  const [materias, estudiantes] = await Promise.all([
    Estudiante.countDocuments(query),
    Estudiante.find(query)
  ])
    res.json({
      estudiante,
      materias
    })
  }