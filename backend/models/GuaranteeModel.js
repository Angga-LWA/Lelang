import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Guarantee = db.define('tguarantee',{
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
    nominal:{
        type: DataTypes.FLOAT
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    payment_proof:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    verified_by:{
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

Users.hasMany(Guarantee);
Guarantee.belongsTo(Users, {foreignKey: 'id_user'});

export default Guarantee;
