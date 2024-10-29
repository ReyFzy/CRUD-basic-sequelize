import User from "../models/userModel.js";

export async function getUsers(req, res){
    try {
        const response = await User.findAll();

        res.status(200).json(response); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function getUserById(req, res) {
    try {
        const response = await User.findOne({
            where: {
                id : req.params.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function createUser(req, res) {
    try {
        const userData = {
            ...req.body,
            create_at: Date.now(),
            update_at: Date.now()
        }
        await User.create(userData);
        
        res.status(201).json({ msg: "User Created!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function updateUser(req, res) {
    try {
        const userData = {
            ...req.body,
            update_at: Date.now()
        }

        await User.update(userData, {
            where: {
                id: req.params.id
            }
        });
        
        res.status(200).json({ msg: "User Updated!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function deleteUser(req, res) {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({ msg: "User Deleted!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}