import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class subcategoria_lead extends Model {
    static associate(models: any) {
        subcategoria_lead.hasMany(models.lead_producto, {
            as: 'SLE_ID',
            foreignKey: 'SLE_ID',
        });

        subcategoria_lead.hasOne(models.categoria_lead, {
            as: 'CLE_ID',
            foreignKey: 'CLE_ID'
        });
    }
}

subcategoria_lead.init({
    SLE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    SLE_NOMBRE: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    CLE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SLE_ESTADO: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'subcategoria_lead'
})