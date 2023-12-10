import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoValoracionEstaDeshabilitado, existeValoracion } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { valoracionesGet, valoracionesGetById, valoracionesPost, valoracionesPut, valoracionesDelete } = require('../controllers/valoraciones.controller')


const router = Router();

router.get('/', valoracionesGet);

router.get('/:id', [
    param('id').custom(existeValoracion),
    validarCampos
], valoracionesGetById);

router.post('/', [
    check('VAL_FECHA', 'Debe ingresar la fecha').notEmpty(),
    check('VAL_PUNTAJE', 'Debe ingresar el puntaje').notEmpty().isInt(),
    check('VAL_COMENTARIO', 'Debe ingresar el comentario').notEmpty(),
    check('USU_ID', 'Debe ingresar el id del usuario correctamente').notEmpty().isInt(),
    check('PRO_ID', 'Debe ingresar el id del producto correctamente').notEmpty().isInt(),
    validarCampos
], valoracionesPost);

router.put('/:id', [
    param('id').custom(existeValoracion),
    check('VAL_FECHA', 'Debe ingresar la fecha').notEmpty(),
    check('VAL_PUNTAJE', 'Debe ingresar el puntaje').notEmpty().isInt(),
    check('VAL_COMENTARIO', 'Debe ingresar el comentario').notEmpty(),
    check('USU_ID', 'Debe ingresar el id del usuario correctamente').notEmpty().isInt(),
    check('PRO_ID', 'Debe ingresar el id del producto correctamente').notEmpty().isInt(),
    validarCampos
], valoracionesPut);

router.delete('/:id', [
    param('id').custom(existeValoracion),
    param('id').custom(estadoValoracionEstaDeshabilitado),
    validarCampos
], valoracionesDelete);


module.exports = router;