import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class subcategoria_curso extends Model {
    static associate(models: any) {
        subcategoria_curso.hasMany(models.curso_producto, {
            as: 'SCU_ID',
            foreignKey: 'SCU_ID',
        });

        subcategoria_curso.hasOne(models.categoria_curso, {
            as: 'CCU_ID',
            foreignKey: 'CCU_ID'
        });
    }
}

subcategoria_curso.init({
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
    modelName: 'subcategoria_curso'
})