const express = require('express');
const router = express.Router();
const { readRazaConFiltros, createRaza, updateRaza, deleteRaza } = require("./raza.controller");
const { respondWithError } = require('../utils/functions');
const { authenticateToken } = require('../middleware/auth');

async function GetRazas(req, res) {
    try {
        const resultadosBusqueda = await readRazaConFiltros(req.query);
        res.status(200).json(resultadosBusqueda);
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PostRaza(req, res) {
    try {
        await createRaza(req.body);
        res.status(201).json({ mensaje: "Raza creada con éxito." });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PatchRazas(req, res) {
    try {
        await updateRaza(req.body);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function DeleteRazas(req, res) {
    try {
        await deleteRaza(req.params.id);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

router.get("/", authenticateToken, GetRazas);
router.post("/", authenticateToken, PostRaza);
router.patch("/", authenticateToken, PatchRazas);
router.delete("/:id", authenticateToken, DeleteRazas);

module.exports = router;