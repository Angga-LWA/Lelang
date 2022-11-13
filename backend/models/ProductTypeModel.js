import { HasMany, Sequelize } from "sequelize";
import db from "../config/Database.js";
import AuctionType from "./AuctionTypeModel.js";

const { DataTypes } = Sequelize;

const ProductType = db.define('mproduct_type',{
    id_auctiontype:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    type_prd:{
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

AuctionType.hasMany(ProductType);
ProductType.belongsTo(AuctionType, {foreignKey: 'id_auctiontype'});

export default ProductType;