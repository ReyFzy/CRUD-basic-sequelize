import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Kelas = db.define('kelas', {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    waliKelas: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    angkatan: DataTypes.STRING
},{
    freezeTableName: true
});

export default Kelas;

// (async()=>{
//     await db.sync()
//         .then (console.log("Table has been migrated"));
// })();