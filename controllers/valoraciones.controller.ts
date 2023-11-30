import { Request, Response } from 'express';
import { valoracion } from '../models/valoracion.model';



const valoracionesGet = async (req: Request, res: Response) => {
    const valoraciones: valoracion[] = await valoracion.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: valoraciones
    })
}

const valoracionesGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const valoracionById: any = await valoracion.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: valoracionById
    })
}

const valoracionesPost = async (req: Request, res: Response) => {
    const { VAL_FECHA, VAL_PUNTAJE,
        VAL_COMENTARIO, USU_ID, PRO_ID, TDU_DESCRIPCION } = req.body;

    await valoracion.create({
        VAL_FECHA, VAL_PUNTAJE,
        VAL_COMENTARIO, USU_ID, PRO_ID, TDU_DESCRIPCION, VAL_ESTADO: true
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Valoración creada"
    })
}

const valoracionesPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { VAL_FECHA, VAL_PUNTAJE,
        VAL_COMENTARIO, USU_ID, PRO_ID, TDU_DESCRIPCION } = req.body;

    await valoracion.update({
        VAL_FECHA, VAL_PUNTAJE,
        VAL_COMENTARIO, USU_ID, PRO_ID, TDU_DESCRIPCION
    }, {
        where: {
            VAL_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Valoración actualizada"
    })
}

const valoracionesDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    valoracion.update({ VAL_ESTADO: false }, {
        where: {
            VAL_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Valoración eliminada"
    })
}

module.exports = {
    valoracionesGet,
    valoracionesGetById,
    valoracionesPost,
    valoracionesPut,
    valoracionesDelete
} 