import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoTipoDuracionEstaDeshabilitado, existeTipoDuracion } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { tipos_duracionGet, tipos_duracionGetById, tipos_duracionPost, tipos_duracionPut, tipos_duracionDelete } = require('../controllers/tipos_duracion.controller')


const router = Router();

router.get('/', tipos_duracionGet);

router.get('/:id', [
    param('id').custom(existeTipoDuracion),
    validarCampos
], tipos_duracionGetById);

router.post('/', [
    check('TDU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('TDU_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    validarCampos
], tipos_duracionPost);

router.put('/:id', [
    param('id').custom(existeTipoDuracion),
    check('TDU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('TDU_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    validarCampos
], tipos_duracionPut);

router.delete('/:id', [
    param('id').custom(existeTipoDuracion),
    param('id').custom(estadoTipoDuracionEstaDeshabilitado),
    validarCampos

], tipos_duracionDelete);


module.exports = router;