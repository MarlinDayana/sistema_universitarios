const { Router }=require('express');
const {check}= require('express-validator')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controller/user');
const { esEmailValido, esProgramaValido, existeEstudinateporID } = require('../helpers/db-validators');
const {validarCampos}=require('../middlewares/validationsPersonalizadas')


const router = Router();

router.get('/', usuariosGet );


router.post('/', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('identificacion', 'el numero de identificacion es obligatorio').not().isEmpty(),
    check('codigo', 'el codigo debe tener 5 caracteres').not().isEmpty().isLength(5),
    check('correo', 'el valor ingresado no tiene el aspecto de un correo').isEmail(),
    check('correo').custom(esEmailValido),
    check('programaAcademico').custom(esProgramaValido),
    validarCampos
], usuariosPost );

router.put('/:id', 
// [

//     check('id', 'el id ingresado no se encuentra en la base de dato').isMongoId(),
//     check('id').custom(existeEstudinateporID),
//     check('programaAcademico').custom(esProgramaValido),
//     validarCampos
//     ],
    usuariosPut);

router.delete('/:id', 
// [
//     check('id', 'el id ingresado no se encuentra en la base de datos').isMongoId(),
//     check('id').custom(existeEstudinateporID),
//     validarCampos
// ],
 usuariosDelete);

router.patch('/', usuariosPatch );



module.exports = router;

