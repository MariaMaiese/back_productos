import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoPromocionEstaDeshabilitado, existePromocion } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { promocionesGet, promocionesGetById, promocionesPost, promocionesPut, promocionesDelete } = require('../controllers/promociones.controller')


const router = Router();

router.get('/', promocionesGet);

router.get('/:id', [
    param('id').custom(existePromocion),
    validarCampos
], promocionesGetById);

router.post('/', [
    check('PRM_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRM_DESCUENTO', 'Debe ingresar el descuento').notEmpty().isInt(),
    check('PRM_CANTIDAD_PARTICIANTES', 'Debe ingresar la cantidad de participantes').notEmpty().isInt(),
    check('PRO_ID', 'Debe ingresar el id del producto correctamente').notEmpty().isInt(),
    validarCampos
], promocionesPost);

router.put('/:id', [
    param('id').custom(existePromocion),
    check('PRM_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRM_DESCUENTO', 'Debe ingresar el descuento').notEmpty().isInt(),
    check('PRM_CANTIDAD_PARTICIANTES', 'Debe ingresar la cantidad de participantes').notEmpty().isInt(),
    validarCampos
], promocionesPut);

router.delete('/:id', [
    param('id').custom(existePromocion),
    param('id').custom(estadoPromocionEstaDeshabilitado),
    validarCampos
], promocionesDelete);


module.exports = router;