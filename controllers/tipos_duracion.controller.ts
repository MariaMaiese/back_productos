import { Request, Response } from 'express';
import { tipo_duracion } from '../models/tipo_duracion.model';



const tipos_duracionGet = async (req: Request, res: Response) => {
    const tipos_duracion: tipo_duracion[] = await tipo_duracion.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: tipos_duracion
    })
}

const tipos_duracionGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const tipo_duracionById: any = await tipo_duracion.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: tipo_duracionById
    })
}

const tipos_duracionPost = async (req: Request, res: Response) => {
    const { TDU_NOMBRE, TDU_DESCRIPCION } = req.body;

    await tipo_duracion.create({
        TDU_NOMBRE, TDU_DESCRIPCION, TDU_ESTADO: true
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Tipo de duracion de lead creado"
    })
}

const tipos_duracionPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { TDU_NOMBRE, TDU_DESCRIPCION } = req.body;

    await tipo_duracion.update({ TDU_NOMBRE, TDU_DESCRIPCION }, {
        where: {
            TDU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Tipo de duracion de lead actualizado"
    })
}

const tipos_duracionDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    tipo_duracion.update({ TDU_ESTADO: false }, {
        where: {
            TDU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Tipo de duración de lead eliminado"
    })
}

module.exports = {
    tipos_duracionGet,
    tipos_duracionGetById,
    tipos_duracionPost,
    tipos_duracionPut,
    tipos_duracionDelete
} 