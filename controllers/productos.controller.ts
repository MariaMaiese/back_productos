import { Request, Response } from 'express';
import { producto } from '../models/producto.model';

const productosGet = async (req: Request, res: Response) => {
    const productos: producto[] = await producto.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: productos
    })
}

const productosGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const productoById: any = await producto.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: productoById
    })
}

const productosPost = async (body_producto: any) => {
    const { PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
    } = body_producto;

    return await producto.create({
        PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
        PRO_ESTADO: true,
        PRO_DESTACADO: false,
        PRO_FECHA_CREACION: new Date(),
    })

    // res.status(200).json({
    //     ok: true,
    //     status: 200,
    //     message: "Producto creado"
    // })
}

const productosPut = async (id_producto: any, body_producto: any) => {

    const id = id_producto;

    const { PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO } = body_producto;

    await producto.update({
        PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO
    }, {
        where: {
            PRO_ID: id
        }
    })
}

const productosDelete = async (id: number) => {


    producto.update({ PRO_ESTADO: false }, {
        where: {
            PRO_ID: id
        }
    })

}

module.exports = {
    productosGet,
    productosGetById,
    productosPost,
    productosPut,
    productosDelete
} 