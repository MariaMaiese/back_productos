import { categoria_curso } from "../models/categoria_curso.model";
import { categoria_lead } from "../models/categoria_lead.model";
import { modalidad } from "../models/modalidad.model";
import { promocion } from "../models/promocion.model";
import { tipo_de_duracion } from "../models/tipo_de_duracion.model";
import { subcategoria_curso } from "../models/subcategoria_curso.model";
import { subcategoria_lead } from "../models/subcategoria_lead.model";
import { valoracion } from "../models/valoracion.model";

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
    const estadoPromocionEstaDeshabilitado: any = await promocion.findByPk(id, {
        attributes: ['PRM_ESTADO']
    })

    if (!estadoPromocionEstaDeshabilitado.PRM_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existeSubCategoriaCurso = async (id: number) => {
    const existeSubCategoriaCurso = await subcategoria_curso.findByPk(id);
    if (!existeSubCategoriaCurso) {
        throw new Error('El id no existe')
    }
}

const estadoSubCategoriaCursoEstaDeshabilitado = async (id: any) => {
    const estadoSubCategoriaCursoEstaDeshabilitado: any = await subcategoria_curso.findByPk(id, {
        attributes: ['SCU_ESTADO']
    })

    if (!estadoSubCategoriaCursoEstaDeshabilitado.SCU_ESTADO) {
        throw new Error(`El estado de categoría ya está deshabilitado`);
    }
}

const existeTipoDuracion = async (id: number) => {
    const existeModalidad = await tipo_de_duracion.findByPk(id);
    if (!existeModalidad) {
    }
}
const existeSubCategoriaLead = async (id: number) => {
    const existeSubCategoriaLead = await subcategoria_lead.findByPk(id);
    if (!existeSubCategoriaLead) {
        throw new Error('El id no existe')
    }
}

const estadoTipoDuracionEstaDeshabilitado = async (id: any) => {
    const estadoTipoDuracionEstaDeshabilitado: any = await tipo_de_duracion.findByPk(id, {
        attributes: ['TDU_ESTADO']
    })

    if (!estadoTipoDuracionEstaDeshabilitado.TDU_ESTADO) {
        throw new Error(`El tipo de duración ya está deshabilitado`);

    }
}
const estadoSubCategoriaLeadEstaDeshabilitado = async (id: any) => {
    const estadoSubCategoriaLeadEstaDeshabilitado: any = await subcategoria_lead.findByPk(id, {
        attributes: ['SLE_ESTADO']
    })

    if (!estadoSubCategoriaLeadEstaDeshabilitado.SLE_ESTADO) {
        throw new Error(`El estado de lead ya está deshabilitado`);
    }
}

const existeValoracion = async (id: number) => {
    const existeValoracion = await valoracion.findByPk(id);
    if (!existeValoracion) {
        throw new Error('El id no existe')
    }
}

const estadoValoracionEstaDeshabilitado = async (id: any) => {
    const estadoValoracionEstaDeshabilitado: any = await valoracion.findByPk(id, {
        attributes: ['VAL_ESTADO']
    })

    if (!estadoValoracionEstaDeshabilitado.VAL_ESTADO) {
        throw new Error(`El estado de lead ya está deshabilitado`);
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
    estadoSubCategoriaCursoEstaDeshabilitado,
    existeTipoDuracion,
    estadoTipoDuracionEstaDeshabilitado,
    existeSubCategoriaLead,
    estadoSubCategoriaLeadEstaDeshabilitado,
    existeValoracion,
    estadoValoracionEstaDeshabilitado
}