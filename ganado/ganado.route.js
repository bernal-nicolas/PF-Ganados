const express = require('express')
const router = express.Router();
const { readGanadoConFiltros, createGanado, updateGanado, deleteGanado } = require("./ganado.controller");
const { respondWithError } = require('../utils/functions');
const {authenticateToken} = require('../middleware/auth');

async function GetGanados(req, res) {
    try {
        const resultadosBusqueda = await readGanadoConFiltros(req.query);

        res.status(200).json({
            ...resultadosBusqueda
        })
    } catch(e) {
        res.status(500).json({msg: ""})
    }
}

async function PostGanado(req, res) {
    try {

        await createGanado(req.body);
        res.status(201).json({ mensaje: "Ganado creado con éxito." });
    } catch (e) {
        respondWithError(res, e);
    }
}


async function PatchGanados(req, res) {
    try {

        await updateGanado(req.body);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        })
    } catch(e) {
        respondWithError(res, e);
    }
}


async function DeleteGanados(req, res) {
    try {

        await deleteGanado(req.params.id);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        })
    } catch(e) {
        respondWithError(res, e);
    }
}

router.get("/", authenticateToken, GetGanados);
router.post("/", authenticateToken, PostGanado);
router.patch("/", authenticateToken, PatchGanados);
router.delete("/:id", authenticateToken, DeleteGanados);

module.exports = router;
