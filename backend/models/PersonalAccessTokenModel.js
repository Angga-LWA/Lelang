import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PersonalAccessToken = db.define('personal_access_tokens',{
    tokenable_type:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    tokenable_id:{
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
            len: [3, 100]
        }
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    abilities:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    last_used_at:{
        type: DataTypes.DATE
    },
    expires_at:{
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});

export default PersonalAccessToken;