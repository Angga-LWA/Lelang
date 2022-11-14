import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import BeaType from "./BeaTypeModel.js";

const { DataTypes } = Sequelize;

const BeaNominal = db.define('mbea_nominal',{
    id_beatype:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    nominal:{
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    }
},{
    freezeTableName: true
});

BeaType.hasMany(BeaNominal);
BeaNominal.belongsTo(BeaType, {foreignKey: 'id_beatype'});

export default BeaNominal;