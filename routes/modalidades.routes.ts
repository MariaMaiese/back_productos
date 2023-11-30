import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoModalidadEstaDeshabilitado, existeModalidad } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { modalidadesGet, modalidadesGetById, modalidadesPost, modalidadesPut, modalidadesDelete } = require('../controllers/modalidades.controller')


const router = Router();

router.get('/', modalidadesGet);

router.get('/:id', [
    param('id').custom(existeModalidad),
    validarCampos
], modalidadesGetById);

router.post('/', [
    check('MOD_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], modalidadesPost);

router.put('/:id', [
    param('id').custom(existeModalidad),
    check('MOD_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], modalidadesPut);

router.delete('/:id', [
    param('id').custom(existeModalidad),
    param('id').custom(estadoModalidadEstaDeshabilitado),
    validarCampos
], modalidadesDelete);


module.exports = router;