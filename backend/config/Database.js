import { Sequelize } from "sequelize";

const db = new Sequelize('auction_v1_dev', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;