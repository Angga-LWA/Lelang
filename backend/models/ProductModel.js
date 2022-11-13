import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Branch from "./BranchModel.js";
import Category from "./CategoryModel.js";
import Entity from "./EntityModel.js";
import Region from "./RegionModel.js";

const { DataTypes } = Sequelize;

const Products = db.define('mproduct',{
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
    prdcode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    prdname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    prddesc:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    id_category:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    min_multiples:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    auction_date:{
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

Region.hasMany(Products);
Products.belongsTo(Region, {foreignKey: 'id_region'});

Entity.hasMany(Products);
Products.belongsTo(Entity, {foreignKey: 'id_entity'});

Branch.hasMany(Products);
Products.belongsTo(Branch, {foreignKey: 'id_branch'});

Category.hasMany(Products);
Products.belongsTo(Category, {foreignKey: 'id_category'});

export default Products;