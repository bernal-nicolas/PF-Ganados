const Ganado = require("./ganado.model")

async function getGanadoMongo(filtros) {
    filtros.isActive = true;
    const ganadosFiltrados = await Ganado.find(filtros);
    return ganadosFiltrados;
}

async function createGanadoMongo(datos) {
    const ganadoCreado = await Ganado.create(datos);
    return ganadoCreado;
}

async function updateGanadoMongo(id, cambios) {
    const resultado = await Ganado.findByIdAndUpdate(id, cambios);

    return resultado
}

async function deleteGanadoMongo(id) {
    const resultado = await Ganado.findByIdAndUpdate(id, { isActive: false }, { new: true });

    return resultado;
}

module.exports = {
    createGanadoMongo,
    getGanadoMongo,
    updateGanadoMongo,
    deleteGanadoMongo
};
