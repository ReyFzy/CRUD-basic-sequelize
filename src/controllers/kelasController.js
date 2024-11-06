import Kelas from "../models/kelasModel.js";
import User from "../models/userModel.js";


export async function getKelas(req, res) {
    try {
        const data = await Kelas.findAll({
            include: {
                model: User,
                as: "users"
            }
        });

        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
};

export async function getKelasById(req, res) {
    try {
        const kelas = await Kelas.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: User,
                as: 'users'
            }
        });

        if (!kelas) return res.status(404).json("Data Kelas tidak ditemukan");

        res.status(200).json(kelas);
    } catch (error) {
        console.log(error)
    }
}

export async function createKelas(req, res) {
    try {
        const { name, waliKelas, angkatan } = req.body;

        if(!name || !waliKelas || !angkatan) return res.status(400).json("Data tidak boleh kosong");

        await Kelas.create({ name, waliKelas, angkatan });

        res.status(201).json("Data Kelas Created!");
    } catch (error) {
        console.log(error)
    }
}

export async function updateKelas(req, res) {
    try {
        const { name, waliKelas, angkatan } = req.body;
        const kelas = await Kelas.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!kelas) return res.status(404).json("Data Kelas tidak ditemukan");

        await Kelas.update({ name, waliKelas, angkatan }, {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json("Data Kelas Updated!");
    } catch (error) {
        console.log(error)
    }
};

export async function deleteKelas(req, res) {
    try {
        const kelas = await Kelas.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!kelas) return res.status(404).json("Data Kelas tidak ditemukan");

        await Kelas.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json("Data Kelas Deleted!");
    } catch (error) {
        console.log(error)
    }
}