import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class lead_producto extends Model {
    static associate(models: any) {
        lead_producto.hasOne(models.s_categoria_lead, {
            as: 'SLE_ID',
            foreignKey: 'SLE_ID'
        });

        lead_producto.belongsTo(models.producto, {
            as: 'PRO_ID',
            foreignKey: 'PRO_ID',
        });
    }
}

lead_producto.init({
    PRO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        //FIXME: esta ok es heredada de producto, deberia ser autoincrement?
        autoIncrement: true
    },
    LEA_URL_DIR: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    SLE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize, //We need to pass the connection instance
    modelName: 'lead_producto'
})