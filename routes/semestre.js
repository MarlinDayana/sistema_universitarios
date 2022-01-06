const { Router }=require('express');
const { check } = require('express-validator');
//const {check}= require('express-validator')
const { semestresGet, semestresPost, semestresPut, semestresDelete } = require('../controller/semestre');
const { validarCampos } = require('../middlewares/validationsPersonalizadas');



const router = Router();

router.get('/', semestresGet );

router.post('/', [
    check('numero', 'valor no valido').not().isEmpty(), // que no sea mayor a 20 - falta validar 
    check('materias','campo obligatorio').not().isEmpty(),
    check('estudiantes','campo obligatorio').not().isEmpty(),
    validarCampos
],semestresPost );

router.put('/', semestresPut);

router.delete('/', semestresDelete)



module.exports = router;

