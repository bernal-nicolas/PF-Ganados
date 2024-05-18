const Raza = require("./raza.model")

async function getRazaMongo(filtros) {
    filtros.isActive = true;
    const razasFiltradas = await Raza.find(filtros);
    
    return razasFiltradas;
}

async function createRazaMongo(datos) {
    const razaCreada = await Raza.create(datos);

    return razaCreada;
}

async function updateRazaMongo(id, cambios) {
    const resultado = await Raza.findByIdAndUpdate(id, cambios);

    return resultado;
}

async function deleteRazaMongo(id) {
    const resultado = await Raza.findByIdAndUpdate(id, { isActive: false }, { new: true });

    return resultado;
}

module.exports = {
    createRazaMongo,
    getRazaMongo,
    updateRazaMongo,
    deleteRazaMongo
};
