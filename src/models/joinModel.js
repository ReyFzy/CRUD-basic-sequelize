import Kelas from "./kelasModel.js";
import User from "./userModel.js";

const assoModel = () =>{
    Kelas.hasMany(User,{
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
        foreignKey: "kelas_id",
        as: "users"
    });
    User.belongsTo(Kelas, {
        foreignKey: "kelas_id",
        as: "kelas"
    });
}

export default assoModel;