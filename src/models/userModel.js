import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    gender: DataTypes.STRING
},{
    freezeTableName: true
});

export default User;

(async()=>{
    await db.sync()
        .then (console.log("Table has been migrated"));
})();