const { createRazaMongo, getRazaMongo, updateRazaMongo, deleteRazaMongo } = require("./raza.actions");

async function readRazaConFiltros(query) {
    const resultadosBusqueda = await getRazaMongo(query);
    return resultadosBusqueda;
}

async function createRaza(datos) {
    const razaCreada = await createRazaMongo(datos);
    return razaCreada;
}

function updateRaza(datos) {
    const { _id, ...cambios } = datos;
    const razaActualizada = updateRazaMongo(_id, cambios);
    return razaActualizada;
}

function deleteRaza(id) {
    const razaEliminada = deleteRazaMongo(id);
    return razaEliminada;
}

module.exports = {
    readRazaConFiltros,
    createRaza,
    updateRaza,
    deleteRaza
}
