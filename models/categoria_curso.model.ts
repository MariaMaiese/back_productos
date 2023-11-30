import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class categoria_curso extends Model {
    static associate(models: any) {
        categoria_curso.hasMany(models.s_categoria_curso, {
            as: 'CCU_ID',
            foreignKey: 'CCU_ID',
        });
    }
}

categoria_curso.init({
    CCU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CCU_NOMBRE: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'categoria_curso'
})