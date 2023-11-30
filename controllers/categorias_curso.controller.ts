import { Request, Response } from 'express';
import { categoria_curso } from '../models/categoria_curso.model';


const categorias_cursoGet = async (req: Request, res: Response) => {
    const categorias_curso: categoria_curso[] = await categoria_curso.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: categorias_curso
    })
}

const categorias_cursoGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const categoria_cursoById: any = await categoria_curso.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: categoria_cursoById
    })
}

const categorias_cursoPost = async (req: Request, res: Response) => {
    const { CCU_NOMBRE } = req.body;

    await categoria_curso.create({ CCU_NOMBRE, CCU_ESTADO: true })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del curso creada"
    })
}

const categorias_cursoPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { CCU_NOMBRE } = req.body;

    await categoria_curso.update({ CCU_NOMBRE }, {
        where: {
            CCU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del curso actualizada"
    })
}

const categorias_cursoDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    categoria_curso.update({ CCU_ESTADO: false }, {
        where: {
            CCU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Categoría del curso eliminada"
    })
}

module.exports = {
    categorias_cursoGet,
    categorias_cursoGetById,
    categorias_cursoPost,
    categorias_cursoPut,
    categorias_cursoDelete
} 