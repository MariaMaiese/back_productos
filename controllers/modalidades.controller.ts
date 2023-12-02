import { Request, Response } from 'express';
import { modalidad } from '../models/modalidad.model';

const modalidadesGet = async (req: Request, res: Response) => {
    const modalidades: modalidad[] = await modalidad.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: modalidades
    })
}

const modalidadesGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const modalidadById: any = await modalidad.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: modalidadById
    })
}

const modalidadesPost = async (req: Request, res: Response) => {
    const { MOD_NOMBRE } = req.body;

    await modalidad.create({ MOD_NOMBRE, MOD_ESTADO: true })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Modalidad creada"
    })
}

const modalidadesPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { MOD_NOMBRE } = req.body;

    await modalidad.update({ MOD_NOMBRE }, {
        where: {
            MOD_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Modalidad actualizada"
    })
}

const modalidadesDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    modalidad.update({ MOD_ESTADO: false }, {
        where: {
            MOD_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Modalidad eliminada"
    })
}

module.exports = {
    modalidadesGet,
    modalidadesGetById,
    modalidadesPost,
    modalidadesPut,
    modalidadesDelete
} 