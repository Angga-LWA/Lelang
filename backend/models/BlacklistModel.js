import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Blacklist = db.define('mblack_list',{
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    release_date:{
        type: DataTypes.DATE,
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

Users.hasMany(Blacklist);
Blacklist.belongsTo(Users, {foreignKey: 'id_user'});

export default Blacklist;