import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoSubCategoriaCursoEstaDeshabilitado, existeSubCategoriaCurso } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { s_categorias_cursoGet, s_categorias_cursoGetById, s_categorias_cursoPost, s_categorias_cursoPut, s_categorias_cursoDelete } = require('../controllers/s_categorias_curso.controller')


const router = Router();

router.get('/', s_categorias_cursoGet);

router.get('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    validarCampos
], s_categorias_cursoGetById);

router.post('/', [
    check('SCU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('CCU_ID', 'Debe ingresar el id de la categoria del curso correctamente').notEmpty().isInt(),
    validarCampos
], s_categorias_cursoPost);

router.put('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    check('PRM_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('PRM_DESCUENTO', 'Debe ingresar el descuento').notEmpty().isInt(),
    check('PRM_CANTIDAD_PARTICIANTES', 'Debe ingresar la cantidad de participantes').notEmpty().isInt(),
    validarCampos
], s_categorias_cursoPut);

router.delete('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    param('id').custom(estadoSubCategoriaCursoEstaDeshabilitado),
    validarCampos
], s_categorias_cursoDelete);


module.exports = router;