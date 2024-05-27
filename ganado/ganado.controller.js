const { createGanadoMongo, getGanadoMongo, updateGanadoMongo, deleteGanadoMongo } = require("./ganado.actions");

async function readGanadoConFiltros(query) {
    const resultadosBusqueda = await getGanadoMongo(query);
    return resultadosBusqueda;
}

async function createGanado(datos) {
    const ganadoCreado = await createGanadoMongo(datos);
    return ganadoCreado;
}

function updateGanado(datos) {
    const { _id, ...cambios } = datos;
    const ganadoActualizado = updateGanadoMongo(_id, cambios);
    return ganadoActualizado;
}

function deleteGanado(id) {
    const ganadoEliminado = deleteGanadoMongo(id);
    return ganadoEliminado;
}

module.exports = {
    readGanadoConFiltros,
    createGanado,
    updateGanado,
    deleteGanado
}