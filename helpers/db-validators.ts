import { categoria_curso } from "../models/categoria_curso.model";
import { categoria_lead } from "../models/categoria_lead.model";
import { modalidad } from "../models/modalidad.model";
import { promocion } from "../models/promocion.model";

const existeCategoriaCurso = async (id: number) => {
    const existeCategoriaCurso = await categoria_curso.findByPk(id);
    if (!existeCategoriaCurso) {
        throw new Error('El id no existe')
    }
}

const estadoCategoriaCursoEstaDeshabilitado = async (id: any) => {
    const estadoCategoriaCursoEstaDeshabilitado: any = await categoria_curso.findByPk(id, {
        attributes: ['CCU_ESTADO']
    })

    if (!estadoCategoriaCursoEstaDeshabilitado.CCU_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existeCategoriaLead = async (id: number) => {
    const existeCategoriaLead = await categoria_lead.findByPk(id);
    if (!existeCategoriaLead) {
        throw new Error('El id no existe')
    }
}

const estadoCategoriaLeadEstaDeshabilitado = async (id: any) => {
    const estadoCategoriaLeadEstaDeshabilitado: any = await categoria_lead.findByPk(id, {
        attributes: ['CLE_ESTADO']
    })

    if (!estadoCategoriaLeadEstaDeshabilitado.CLE_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existeModalidad = async (id: number) => {
    const existeModalidad = await modalidad.findByPk(id);
    if (!existeModalidad) {
        throw new Error('El id no existe')
    }
}

const estadoModalidadEstaDeshabilitado = async (id: any) => {
    const estadoModalidadEstaDeshabilitado: any = await modalidad.findByPk(id, {
        attributes: ['MOD_ESTADO']
    })

    if (!estadoModalidadEstaDeshabilitado.MOD_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existePromocion = async (id: number) => {
    const existePromocion = await promocion.findByPk(id);
    if (!existePromocion) {
        throw new Error('El id no existe')
    }
}

const estadoPromocionEstaDeshabilitado = async (id: any) => {
    const estadoPromocionEstaDeshabilitado: any = await modalidad.findByPk(id, {
        attributes: ['PRM_ESTADO']
    })

    if (!estadoPromocionEstaDeshabilitado.PRM_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existeSubCategoriaCurso = async (id: number) => {
    const existeSubCategoriaCurso = await promocion.findByPk(id);
    if (!existeSubCategoriaCurso) {
        throw new Error('El id no existe')
    }
}

const estadoSubCategoriaCursoEstaDeshabilitado = async (id: any) => {
    const estadoSubCategoriaCursoEstaDeshabilitado: any = await modalidad.findByPk(id, {
        attributes: ['SCU_ESTADO']
    })

    if (!estadoSubCategoriaCursoEstaDeshabilitado.SCU_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

export {
    existeCategoriaCurso,
    estadoCategoriaCursoEstaDeshabilitado,
    existeCategoriaLead,
    estadoCategoriaLeadEstaDeshabilitado,
    existeModalidad,
    estadoModalidadEstaDeshabilitado,
    existePromocion,
    estadoPromocionEstaDeshabilitado,
    existeSubCategoriaCurso,
    estadoSubCategoriaCursoEstaDeshabilitado
}