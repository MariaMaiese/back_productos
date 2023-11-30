import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class s_categoria_curso extends Model {
    static associate(models: any) {
        s_categoria_curso.hasMany(models.curso_producto, {
            as: 'SCU_ID',
            foreignKey: 'SCU_ID',
        });

        s_categoria_curso.hasOne(models.categoria_curso, {
            as: 'CCU_ID',
            foreignKey: 'CCU_ID'
        });
    }
}

s_categoria_curso.init({
    SCU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    SCU_NOMBRE: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    CCU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SCU_ESTADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 's_categoria_curso'
})