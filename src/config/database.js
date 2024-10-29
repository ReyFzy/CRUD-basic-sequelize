import { Sequelize } from "sequelize";

const db = new Sequelize('sequelize_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;