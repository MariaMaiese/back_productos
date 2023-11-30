import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoCategoriaCursoEstaDeshabilitado, existeCategoriaCurso, } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { categorias_cursoGet, categorias_cursoGetById, categorias_cursoPost, categorias_cursoPut, categorias_cursoDelete } = require('../controllers/categorias_curso.controller')


const router = Router();

router.get('/', categorias_cursoGet);

router.get('/:id', [
    param('id').custom(existeCategoriaCurso),
    validarCampos
], categorias_cursoGetById);

router.post('/', [
    check('CCU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], categorias_cursoPost);

router.put('/:id', [
    param('id').custom(existeCategoriaCurso),
    check('CCU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], categorias_cursoPut);

router.delete('/:id', [
    param('id').custom(existeCategoriaCurso),
    param('id').custom(estadoCategoriaCursoEstaDeshabilitado),
    validarCampos
], categorias_cursoDelete);


module.exports = router;