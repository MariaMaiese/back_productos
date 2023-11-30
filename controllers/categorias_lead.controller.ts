import { Request, Response } from 'express';
import { categoria_lead } from '../models/categoria_lead.model';



const categorias_leadGet = async (req: Request, res: Response) => {
    const categorias_lead: categoria_lead[] = await categoria_lead.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: categorias_lead
    })
}

const categorias_leadGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const categoria_leadById: any = await categoria_lead.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: categoria_leadById
    })
}

const categorias_leadPost = async (req: Request, res: Response) => {
    const { CLE_NOMBRE } = req.body;

    await categoria_lead.create({ CLE_NOMBRE, CLE_ESTADO: true })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del lead creada"
    })
}

const categorias_leadPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { CLE_NOMBRE } = req.body;

    await categoria_lead.update({ CLE_NOMBRE }, {
        where: {
            CLE_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del lead actualizada"
    })
}

const categorias_leadDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    categoria_lead.update({ CLE_ESTADO: false }, {
        where: {
            CLE_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del lead eliminada"
    })
}

module.exports = {
    categorias_leadGet,
    categorias_leadGetById,
    categorias_leadPost,
    categorias_leadPut,
    categorias_leadDelete
} 