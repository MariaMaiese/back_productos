import { Request, Response } from 'express';
import { promocion } from '../models/promocion.model';



const promocionesGet = async (req: Request, res: Response) => {
    const promociones: promocion[] = await promocion.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: promociones
    })
}

const promocionesGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const promocionById: any = await promocion.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: promocionById
    })
}

const promocionesPost = async (req: Request, res: Response) => {
    const { PRM_NOMBRE, PRM_DESCUENTO, PRM_CANTIDAD_PARTICIANTES, PRO_ID } = req.body;

    await promocion.create({
        PRM_NOMBRE, PRM_ESTADO: true,
        PRM_DESCUENTO, PRM_CANTIDAD_PARTICIANTES, PRO_ID
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Promoción creada"
    })
}

const promocionesPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { PRM_NOMBRE, PRM_DESCUENTO, PRM_CANTIDAD_PARTICIANTES } = req.body;

    await promocion.update({ PRM_NOMBRE, PRM_DESCUENTO, PRM_CANTIDAD_PARTICIANTES }, {
        where: {
            PRM_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Promoción actualizada"
    })
}

const promocionesDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    promocion.update({ PRM_ESTADO: false }, {
        where: {
            PRM_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Promocion eliminada"
    })
}

module.exports = {
    promocionesGet,
    promocionesGetById,
    promocionesPost,
    promocionesPut,
    promocionesDelete
} 