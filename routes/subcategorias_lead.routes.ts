import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { estadoSubCategoriaLeadEstaDeshabilitado, existeCategoriaLead, existeSubCategoriaLead } from "../helpers/db-validators";
import { check, param } from "express-validator";
const { s_categorias_leadGet, s_categorias_leadGetByCategoriaId, s_categorias_leadGetById, s_categorias_leadPost, s_categorias_leadPut, s_categorias_leadDelete } = require('../controllers/subcategorias_lead.controller')

const router = Router();

router.get('/', s_categorias_leadGet);

router.get('/:id', [
    param('id').custom(existeSubCategoriaLead),
    validarCampos
], s_categorias_leadGetById);

router.get('/by-categoria/:id', [
    param('id').custom(existeCategoriaLead),
    validarCampos
], s_categorias_leadGetByCategoriaId);

router.post('/', [
    check('SLE_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('CLE_ID', 'Debe ingresar el id de la categoria del lead').notEmpty(),
    check('CLE_ID', 'El id de la categoria del lead no cumple con el formato').isInt(),
    validarCampos
], s_categorias_leadPost);

router.put('/:id', [
    param('id').custom(existeSubCategoriaLead),
    check('SLE_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    validarCampos
], s_categorias_leadPut);

router.delete('/:id', [
    param('id').custom(existeSubCategoriaLead),
    param('id').custom(estadoSubCategoriaLeadEstaDeshabilitado),
    validarCampos
], s_categorias_leadDelete);


module.exports = router;