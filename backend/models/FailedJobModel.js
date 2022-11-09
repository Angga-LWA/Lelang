import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const FailedJob = db.define('failed_jobs',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    connection:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    queue:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
    },
    payload:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
    },
    exception:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
    },
    failed_at:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
    }
},{
    freezeTableName: true
});

export default FailedJob;