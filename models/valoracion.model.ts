import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class valoracion extends Model {
    static associate(models: any) {
        valoracion.belongsTo(models.curso_producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID'
        });
    }
}

valoracion.init({
    VAL_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    VAL_FECHA: {
        type: DataTypes.DATE,
        allowNull: false
    },
    VAL_PUNTAJE: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    VAL_COMENTARIO: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    USU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PRO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'valoracion'
})