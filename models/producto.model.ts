import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

//FIXME: esta clase es abstracta
export class producto extends Model {
    static associate(models: any) {
        producto.hasOne(models.curso_producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
        producto.hasOne(models.lead_producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
    }
}

producto.init({
    PRO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    PRO_DESCRIPCION: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    PRO_DESCRIPCION_CORTA: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    PRO_PRECIO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PRO_PRECIO_DESCRUENTO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PRO_ESTADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    PRO_DESTACADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    PRO_FECHA_CREACION: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'producto'
})