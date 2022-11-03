import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    // profile_img:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate:{
    //         notEmpty: true
    //     }
    // },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    flag_active:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nik:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    npwp:{
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
    // remember_token:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate:{
    //         notEmpty: true
    //     }
    // }
},{
    freezeTableName: true
});

export default Users;