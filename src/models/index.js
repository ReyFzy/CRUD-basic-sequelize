import db from "../config/database.js";
import User from "./userModel.js";
import Kelas from "./kelasModel.js";
import assoModel from "./joinModel.js";

export async function syncUserKelas(){
    try {
        assoModel();
        await db.sync({ alter: true, force: true });
        console.log("database and model synced succesfully");
    } catch (error) {
        console.log(error);
    }
}

export { User, Kelas };