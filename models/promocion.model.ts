import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class promocion extends Model {
    static associate(models: any) {
        promocion.hasOne(models.curso_producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID'
        });
    }
}

promocion.init({
    PRM_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    PRM_NOMBRE: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    PRM_DESCUENTO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PRM_CANTIDAD_PARTICIANTES: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PRO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'promocion'
})