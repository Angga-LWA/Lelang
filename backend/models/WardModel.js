import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Branch from "./BranchModel.js";
import Entity from "./EntityModel.js";
import Region from "./RegionModel.js";

const { DataTypes } = Sequelize;

const Ward = db.define('mward',{
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
    id_branch:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    wardcode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    wardname:{
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
            len: [3, 100]
        }
    }
},{
    freezeTableName: true
});

Branch.hasMany(Ward);
Ward.belongsTo(Branch, {foreignKey: 'id_branch'});

Entity.hasMany(Ward);
Ward.belongsTo(Entity, {foreignKey: 'id_entity'});

Region.hasMany(Ward);
Ward.belongsTo(Region, {foreignKey: 'id_region'});

export default Ward;