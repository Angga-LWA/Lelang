import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ProductType from "./ProductTypeModel.js";

const { DataTypes } = Sequelize;

const BeaType = db.define('mbea_type',{
    id_prdtype:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    type_beaname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    }
},{
    freezeTableName: true
});

ProductType.hasMany(BeaType);
BeaType.belongsTo(ProductType, {foreignKey: 'id_prdtype'});

export default BeaType;