import { Request, Response } from 'express';
import { subcategoria_curso } from '../models/subcategoria_curso.model';



const s_categorias_cursoGet = async (req: Request, res: Response) => {
    const s_categorias_curso: subcategoria_curso[] = await subcategoria_curso.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: s_categorias_curso
    })
}

const s_categorias_cursoGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    const subcategoria_cursoById: any = await subcategoria_curso.findByPk(id);

    res.status(200).json({
        ok: true,
        status: 200,
        body: subcategoria_cursoById
    })
}


const s_categorias_cursoGetByCategoriaId = async (req: Request, res: Response) => {
    const { id } = req.params

    const subcategoria_cursoByCategoriaId: any = await subcategoria_curso.findAll({ where: { CCU_ID: id } });

    res.status(200).json({
        ok: true,
        status: 200,
        body: subcategoria_cursoByCategoriaId
    })
}

const s_categorias_cursoPost = async (req: Request, res: Response) => {
    const { SCU_NOMBRE, CCU_ID } = req.body;

    await subcategoria_curso.create({
        SCU_NOMBRE, SCU_ESTADO: true, CCU_ID
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de curso creada"
    })
}

const s_categorias_cursoPut = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { SCU_NOMBRE } = req.body;

    await subcategoria_curso.update({ SCU_NOMBRE }, {
        where: {
            SCU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de curso actualizada"
    })
}

const s_categorias_cursoDelete = async (req: Request, res: Response) => {

    const { id } = req.params;

    subcategoria_curso.update({ SCU_ESTADO: false }, {
        where: {
            SCU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Sub categoría de curso eliminada"
    })
}

module.exports = {
    s_categorias_cursoGet,
    s_categorias_cursoGetById,
    s_categorias_cursoPost,
    s_categorias_cursoPut,
    s_categorias_cursoDelete,
    s_categorias_cursoGetByCategoriaId
} 