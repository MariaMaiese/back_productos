import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class tipo_de_duracion extends Model {
    static associate(models: any) {
        tipo_de_duracion.hasMany(models.curso_producto, {
            as: 'TDU_ID',
            foreignKey: 'TDU_ID',
        });
    }
}
tipo_de_duracion.init({
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
    TDU_ESTADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'tipo_de_duracion'
})
