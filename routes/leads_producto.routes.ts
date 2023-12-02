import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoProductoEstaDeshabilitado, existeLead } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { leadsGet, leadsGetById, leadsPost, leadsPut, leadsDelete } = require('../controllers/leads_producto.controller')


const router = Router();

router.get('/', leadsGet);

router.get('/:id', [
    param('id').custom(existeLead),
    validarCampos
], leadsGetById);

router.post('/', [
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('LEA_URL_DIR', 'Debe ingresar la ruta del lead').notEmpty(),
    check('SLE_ID', 'Debe ingresar la subcategoría del lead').notEmpty().isInt(),
    validarCampos
], leadsPost);

router.put('/:id', [
    param('id').custom(existeLead),
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('LEA_URL_DIR', 'Debe ingresar la ruta del lead').notEmpty(),
    check('SLE_ID', 'Debe ingresar la subcategoría del lead').notEmpty().isInt(),
    validarCampos
], leadsPut);

router.delete('/:id', [
    param('id').custom(existeLead),
    param('id').custom(estadoProductoEstaDeshabilitado),
    validarCampos
], leadsDelete);


module.exports = router;