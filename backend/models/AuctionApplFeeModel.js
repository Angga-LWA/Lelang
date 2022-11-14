import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import AuctionType from "./AuctionTypeModel.js";
import BeaNominal from "./BeaNominalModel.js";

const { DataTypes } = Sequelize;

const AuctionApplFee = db.define('mauction_appl_fee',{
    id_beanominal:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    id_auctiontype:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    name:{
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

AuctionType.hasMany(AuctionApplFee);
AuctionApplFee.belongsTo(AuctionType, {foreignKey: 'id_auctiontype'});

BeaNominal.hasMany(AuctionApplFee);
AuctionApplFee.belongsTo(BeaNominal, {foreignKey: 'id_beanominal'});

export default AuctionApplFee;