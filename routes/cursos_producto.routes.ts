import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoCursoProductoEstaDeshabilitado, existeCursoProducto } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { cursos_productoGet, cursos_productoGetById, cursos_productoPost, cursos_productoPut, cursos_productoDelete } = require('../controllers/cursos_producto.controller')


const router = Router();

router.get('/', cursos_productoGet);

router.get('/:id', [
    param('id').custom(existeCursoProducto),
    validarCampos
], cursos_productoGetById);

router.post('/', [
    check('CUR_DIRIGIDO_A', 'Debe ingresar el campo dirigido a').notEmpty(),
    check('CUR_OBJETIVOS', 'Debe ingresar los objetivos').notEmpty(),
    check('CUR_ESTRUCTURA', 'Debe ingresar la estructura').notEmpty(),
    check('CUR_IMAGEN_1', 'Debe ingresar la imagen').notEmpty(),
    check('CUR_IMAGEN_2', 'Debe ingresar la imagen').notEmpty(),
    check('CUR_VIDEO_PROMOCIONAL', 'Debe ingresar el video').notEmpty(),
    check('CUR_FECHA_INICIO', 'Debe ingresar la fecha de inicio').notEmpty(),
    check('CUR_CANTIDAD_MIN_PARTICIPANTES', 'Debe ingresar cantidad minima de participantes').notEmpty().isInt(),
    check('CUR_CANTIDAD_MAX_PARTICIPANTES', 'Debe ingresar cantidad máxima de participantes').notEmpty().isInt(),
    check('CUR_CODIGO_SENCE', 'Debe ingresar el código sence').notEmpty(),
    check('CUR_DURACION', 'Debe ingresar la duración').notEmpty(),
    check('CUR_INCLUYE_CERTIFICACION', 'Debe ingresar si ncluye certificación').notEmpty().isBoolean(),
    check('TDU_ID', 'Debe ingresar el id del tipo de duración').notEmpty().isInt(),
    check('MOD_ID', 'Debe ingresar el id de la modalidad').notEmpty().isInt(),
    check('USU_ID', 'Debe ingresar el id de la modalidad').notEmpty().isInt(),
    check('SCU_ID', 'Debe ingresar subcategoría del curso').notEmpty().isInt(),
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    validarCampos
], cursos_productoPost);

router.put('/:id', [
    param('id').custom(existeCursoProducto),
    check('PRO_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRO_DESCRIPCION', 'Debe ingresar la descripción').notEmpty(),
    check('PRO_DESCRIPCION_CORTA', 'Debe ingresar la descripción corta').notEmpty(),
    check('PRO_PRECIO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('PRO_PRECIO_DESCUENTO', 'Debe ingresar el precio').notEmpty().isInt(),
    check('CUR_DIRIGIDO_A', 'Debe ingresar el campo dirigido a').notEmpty(),
    check('CUR_OBJETIVOS', 'Debe ingresar los objetivos').notEmpty(),
    check('CUR_ESTRUCTURA', 'Debe ingresar la estructura').notEmpty(),
    check('CUR_IMAGEN_1', 'Debe ingresar la imagen').notEmpty(),
    check('CUR_IMAGEN_2', 'Debe ingresar la imagen').notEmpty(),
    check('CUR_VIDEO_PROMOCIONAL', 'Debe ingresar el video').notEmpty(),
    check('CUR_FECHA_INICIO', 'Debe ingresar la fecha de inicio').notEmpty(),
    check('CUR_CANTIDAD_MIN_PARTICIPANTES', 'Debe ingresar cantidad minima de participantes').notEmpty().isInt(),
    check('CUR_CANTIDAD_MAX_PARTICIPANTES', 'Debe ingresar cantidad máxima de participantes').notEmpty().isInt(),
    check('CUR_CODIGO_SENCE', 'Debe ingresar el código sence').notEmpty(),
    check('CUR_DURACION', 'Debe ingresar la duración').notEmpty(),
    check('CUR_INCLUYE_CERTIFICACION', 'Debe ingresar si ncluye certificación').notEmpty().isBoolean(),
    validarCampos
], cursos_productoPut);

router.delete('/:id', [
    param('id').custom(existeCursoProducto),
    param('id').custom(estadoCursoProductoEstaDeshabilitado),
    validarCampos
], cursos_productoDelete);


module.exports = router;