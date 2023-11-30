import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class categoria_lead extends Model {
    static associate(models: any) {
        categoria_lead.hasMany(models.s_categoria_lead, {
            as: 'CLE_ID',
            foreignKey: 'CLE_ID',
        });
    }
}

categoria_lead.init({
    CLE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CLE_NOMBRE: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'categoria_lead'
})