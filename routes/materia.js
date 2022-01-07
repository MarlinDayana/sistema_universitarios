const { Router }=require('express');
const { check } = require('express-validator');
const { materiasGet, materiasPost, materiasDelete, materiasPut } = require('../controller/materia');
const { existeidMateria } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validationsPersonalizadas');



const router = Router();

router.get('/', materiasGet );


router.post('/', [
    check('nombre_materia', 'este campo es obligatorio').not().isEmpty(),
    check('codigoMateria', ' este campo es obligatorio').not().isEmpty().isLength(5),
    check('tipodemateria', ' incorrecto').isIn(['linea', 'electiva']),
    check('creditos', 'incorrecto').isIn(['4','2']),
    validarCampos
],materiasPost );

router.put('/:id', [
    check('id','el id ingresado no es un id de mongo').isMongoId(),
    check('id').custom(existeidMateria),
    validarCampos
],materiasPut);

router.delete('/', materiasDelete)



module.exports = router;

