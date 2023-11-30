import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class modalidad extends Model {
    static associate(models: any) {
        modalidad.hasMany(models.curso_producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
    }
}

modalidad.init({
    MOD_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    MOD_NOMBRE: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    MOD_ESTADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'modalidad'
})