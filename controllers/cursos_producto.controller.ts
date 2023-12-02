import { Request, Response } from 'express';
import { curso_producto } from '../models/curso_producto.model';
import { producto } from '../models/producto.model';
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
    const { PRO_NOMBRE, PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA, PRO_PRECIO,
        PRO_PRECIO_DESCUENTO, CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_FECHA_INICIO, CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES, CUR_CODIGO_SENCE,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION,
        USU_ID, TDU_ID, MOD_ID, SCU_ID } = req.body;


    const producto_nuevo = {
        PRO_NOMBRE, PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA, PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
    }
    const producto_respuesta: any = await productosPost(producto_nuevo)

    await curso_producto.create({
        PRO_ID: producto_respuesta.PRO_ID, CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
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

    const { PRO_NOMBRE, PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA, PRO_PRECIO,
        PRO_PRECIO_DESCUENTO, CUR_DIRIGIDO_A, CUR_OBJETIVOS, CUR_ESTRUCTURA,
        CUR_IMAGEN_1, CUR_IMAGEN_2, CUR_VIDEO_PROMOCIONAL,
        CUR_CANTIDAD_MIN_PARTICIPANTES,
        CUR_CANTIDAD_MAX_PARTICIPANTES,
        CUR_DURACION, CUR_INCLUYE_CERTIFICACION } = req.body;

    console.log(id)

    const bodyProducto = {
        PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO
    }

    const id_producto: any = id

    await productosPut(id_producto, bodyProducto)

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

    await productosDelete(id)

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