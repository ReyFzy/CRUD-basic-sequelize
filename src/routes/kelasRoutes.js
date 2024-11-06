import * as kelasController from "../controllers/kelasController.js";
import express from "express";

const router = express.Router();

router.get('/kelas', kelasController.getKelas);
router.get('/kelas/:id', kelasController.getKelasById);
router.post('/kelas', kelasController.createKelas);
router.patch('/kelas/:id', kelasController.updateKelas);
router.delete('/kelas/:id', kelasController.deleteKelas);

export default router;