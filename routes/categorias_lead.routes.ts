import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoCategoriaLeadEstaDeshabilitado, existeCategoriaLead } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { categorias_leadGet, categorias_leadGetById, categorias_leadPost, categorias_leadPut, categorias_leadDelete } = require('../controllers/categorias_lead.controller')


const router = Router();

router.get('/', categorias_leadGet);

router.get('/:id', [
    param('id').custom(existeCategoriaLead),
    validarCampos
], categorias_leadGetById);

router.post('/', [
    check('CLE_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], categorias_leadPost);

router.put('/:id', [
    param('id').custom(existeCategoriaLead),
    check('CLE_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], categorias_leadPut);

router.delete('/:id', [
    param('id').custom(existeCategoriaLead),
    param('id').custom(estadoCategoriaLeadEstaDeshabilitado),
    validarCampos
], categorias_leadDelete);


module.exports = router;