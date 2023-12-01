import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoProductoEstaDeshabilitado, existeProducto } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { productosGet, productosGetById, productosPost, productosPut, productosDelete } = require('../controllers/productos.controller')


const router = Router();

router.get('/', productosGet);

router.get('/:id', [
    param('id').custom(existeProducto),
    validarCampos
], productosGetById);

router.post('/', [
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    validarCampos
], productosPost);

router.put('/:id', [
    param('id').custom(existeProducto),
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    validarCampos
], productosPut);

router.delete('/:id', [
    param('id').custom(existeProducto),
    param('id').custom(estadoProductoEstaDeshabilitado),
    validarCampos
], productosDelete);


module.exports = router;