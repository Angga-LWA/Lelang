import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Entity from "./EntityModel.js";
import Region from "./RegionModel.js";

const { DataTypes } = Sequelize;

const Branch = db.define('mbranch',{
    id_region:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    id_entity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    branchcode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    branchname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    created_by:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
    }
},{
    freezeTableName: true
});

Entity.hasMany(Branch);
Branch.belongsTo(Entity, {foreignKey: 'id_entity'});

Region.hasMany(Branch);
Branch.belongsTo(Region, {foreignKey: 'id_region'});

export default Branch;