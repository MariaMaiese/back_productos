import { Request, Response } from 'express';
import { s_categoria_lead } from '../models/s_categoria_lead.model';



const s_categorias_leadGet = async (req: Request, res: Response) => {
    const s_categorias_lead: s_categoria_lead[] = await s_categoria_lead.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: s_categorias_lead
    })
}

const s_categorias_leadGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const s_categoria_leadById: any = await s_categoria_lead.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: s_categoria_leadById
    })
}

const s_categorias_leadPost = async (req: Request, res: Response) => {
    const { SLE_NOMBRE, CLE_ID } = req.body;

    await s_categoria_lead.create({
        SLE_NOMBRE, SLE_ESTADO: true, CLE_ID
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de lead creada"
    })
}

const s_categorias_leadPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { SLE_NOMBRE } = req.body;

    await s_categoria_lead.update({ SLE_NOMBRE }, {
        where: {
            SLE_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de lead actualizada"
    })
}

const s_categorias_leadDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    s_categoria_lead.update({ SLE_ESTADO: false }, {
        where: {
            SLE_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de lead eliminada"
    })
}

module.exports = {
    s_categorias_leadGet,
    s_categorias_leadGetById,
    s_categorias_leadPost,
    s_categorias_leadPut,
    s_categorias_leadDelete
} 