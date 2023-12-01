import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class curso_producto extends Model {
    static associate(models: any) {
        curso_producto.hasMany(models.valoracion, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
        curso_producto.hasMany(models.promocion, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
        curso_producto.hasOne(models.modalidad, {
            as: 'MOD_ID',
            foreignKey: 'MOD_ID'
        });
        curso_producto.hasOne(models.subcategoria_curso, {
            as: 'SCU_ID',
            foreignKey: 'SCU_ID'
        });
        curso_producto.hasOne(models.tipo_de_duracion, {
            as: 'TDU_ID',
            foreignKey: 'TDU_ID'
        });
        curso_producto.belongsTo(models.producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
    }
}

curso_producto.init({
    PRO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    CUR_DIRIGIDO_A: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_OBJETIVOS: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_ESTRUCTURA: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_IMAGEN_1: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_IMAGEN_2: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_VIDEO_PROMOCIONAL: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CUR_FECHA_INICIO: {
        type: DataTypes.DATE,
        allowNull: false
    },
    CUR_CANTIDAD_MIN_PARTICIPANTES: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CUR_CANTIDAD_MAX_PARTICIPANTES: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CUR_CODIGO_SENCE: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    CUR_DURACION: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CUR_INCLUYE_CERTIFICACION: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    USU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TDU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    MOD_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SCU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'curso_producto'
})