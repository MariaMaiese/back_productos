import { Request, Response } from 'express';
import { curso_producto } from '../models/curso_producto.model';
const { productosPost, productosPut, productosDelete } = require('./productos.controller')


const cursos_productoGet = async (req: Request, res: Response) => {
    const cursos_producto: curso_producto[] = await curso_producto.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: cursos_producto
    })
}

const cursos_productoGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const curso_productoById: any = await curso_producto.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: curso_productoById
    })
}
const cursos_productoPost = async (req: Request, res: Response) => {
    const { CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_FECHA_INICIO, CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES, CUR_CODIGO_SENCE,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION,
        USU_ID, TDU_ID, MOD_ID, SCU_ID } = req.body;

    const newProducto: any = await productosPost()

    await curso_producto.create({
        PRO_ID: newProducto.PRO_ID, CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_FECHA_INICIO, CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES, CUR_CODIGO_SENCE,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION,
        USU_ID, TDU_ID, MOD_ID, SCU_ID, CUR_ESTADO: true
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Curso creado"
    })
}

const cursos_productoPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION } = req.body;

    await productosPut()

    await curso_producto.update({
        CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION
    }, {
        where: {
            PRO_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Curso actualizado"
    })
}

const cursos_productoDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    await productosDelete()

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Curso eliminado"
    })
}

module.exports = {
    cursos_productoGet,
    cursos_productoGetById,
    cursos_productoPost,
    cursos_productoPut,
    cursos_productoDelete
} 