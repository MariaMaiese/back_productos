import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoSubCategoriaCursoEstaDeshabilitado, existeSubCategoriaCurso } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { s_categorias_cursoGet, s_categorias_cursoGetById, s_categorias_cursoPost, s_categorias_cursoPut, s_categorias_cursoDelete } = require('../controllers/subcategorias_curso.controller')


const router = Router();

router.get('/', s_categorias_cursoGet);

router.get('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    validarCampos
], s_categorias_cursoGetById);

router.post('/', [
    check('SCU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('CCU_ID', 'Debe ingresar el id de la categoria del curso').notEmpty(),
    check('CCU_ID', 'El id del la categoría del curso no cumple con el formato').isInt(),
    validarCampos
], s_categorias_cursoPost);

router.put('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    check('SCU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], s_categorias_cursoPut);

router.delete('/:id', [
    param('id').custom(existeSubCategoriaCurso),
    param('id').custom(estadoSubCategoriaCursoEstaDeshabilitado),
    validarCampos
], s_categorias_cursoDelete);


module.exports = router;