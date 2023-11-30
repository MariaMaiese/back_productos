import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class tipo_duracion extends Model {
    static associate(models: any) {
        tipo_duracion.hasMany(models.curso_producto, {
            as: 'TDU_ID',
            foreignKey: 'TDU_ID',
        });
    }
}
tipo_duracion.init({
    TDU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    TDU_NOMBRE: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    TDU_DESCRIPCION: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'tipo_duracion'
})
