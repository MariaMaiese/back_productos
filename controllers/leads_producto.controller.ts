import { Request, Response } from 'express';
import { lead_producto } from '../models/lead_producto.model';
import { producto } from '../models/producto.model';
const { productosPost, productosPut, productosDelete } = require('./productos.controller')

const leadsGet = async (req: Request, res: Response) => {
    const leads: lead_producto[] = await lead_producto.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: leads
    })
}

const leadsGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const leadById: any = await lead_producto.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: leadById
    })
}

const leadsPost = async (req: Request, res: Response) => {

    const { PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
        LEA_URL_DIR,
        SLE_ID,
    } = req.body;

    const productoBody = {
        PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
    }

    const productoNew: any = await productosPost(productoBody)

    await lead_producto.create({
        PRO_ID: productoNew.PRO_ID,
        LEA_URL_DIR,
        SLE_ID,
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Lead creado"
    })
}

const leadsPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
        LEA_URL_DIR,
        SLE_ID,
    } = req.body;

    const productoBody = {
        PRO_NOMBRE,
        PRO_DESCRIPCION,
        PRO_DESCRIPCION_CORTA,
        PRO_PRECIO,
        PRO_PRECIO_DESCUENTO,
    }

    await productosPut(id, productoBody)

    await lead_producto.update({
        LEA_URL_DIR,
        SLE_ID,
    }, {
        where: {
            PRO_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Lead actualizado"
    })
}

const leadsDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    await productosDelete(id)

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Lead eliminado"
    })
}

module.exports = {
    leadsGet,
    leadsGetById,
    leadsPost,
    leadsPut,
    leadsDelete
} 