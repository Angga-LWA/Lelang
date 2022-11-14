import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const BidOrd = db.define('tbid_ord',{
    id_user:{
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
    bidcode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    bidprice:{
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

Users.hasMany(BidOrd);
BidOrd.belongsTo(Users, {foreignKey: 'id_user'});

export default BidOrd;