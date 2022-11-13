import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Region from "./RegionModel.js";

const { DataTypes } = Sequelize;

const Entity = db.define('mentity',{
    id_region:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    entitycode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    entityname:{
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

Region.hasMany(Entity);
Entity.belongsTo(Region, {foreignKey: 'id_region'});

export default Entity;