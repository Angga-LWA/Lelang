import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const BidLogs = db.define('tbid_logs',{
    id_user:{
        type: DataTypes.INTEGER,
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
    }
},{
    freezeTableName: true
});

Users.hasMany(BidLogs);
BidLogs.belongsTo(Users, {foreignKey: 'id_user'});

export default BidLogs;