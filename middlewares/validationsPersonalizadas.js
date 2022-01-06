const {validationResult}= require('express-validator');


const validarCampos = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors);
    }

    await next()

}

module.exports = {
  validarCampos
}