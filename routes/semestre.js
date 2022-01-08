const { Router }=require('express');
const { check } = require('express-validator');
//const {check}= require('express-validator')
const { semestresGet, semestresPost, semestresPut, semestresDelete, asignarMatPut, asignarEstudiante} = require('../controller/semestre');
const { validarCampos } = require('../middlewares/validationsPersonalizadas');



const router = Router();

router.get('/', semestresGet );

router.post('/', [
    check('numero', 'valor no valido').not().isEmpty(), // que no sea mayor a 20 - falta validar 
    validarCampos
],semestresPost );

router.put('/:id', semestresPut);

router.put('/api/asignarMat/:id', asignarMatPut);

router.put('/api/asignarEstudiante/:id', asignarEstudiante);


router.delete('/:id', semestresDelete);



module.exports = router;

