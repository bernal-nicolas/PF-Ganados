const Ganado = require("./ganado.model")

async function getGanadoMongo(filtros) {
    userID = filtros.userID
    delete filtros.userID
    filtros.isActive = true
    filtros["razaInfo.userID"] = userID
    
    let ganadosFiltrados = await Ganado.aggregate([
      {
        $addFields: {
          razaObjectId: { $toObjectId: "$raza" }
        }
      },
      {
        $lookup: {
          from: "razas", // Nombre de la colección Ganado en plural
          localField: "razaObjectId",
          foreignField: "_id",
          as: "razaInfo"
        }
      },
      {
        $unwind: "$razaInfo"
      },
      // Filtrar por userID del usuario proporcionado
      {
        $match: filtros
      },
      // Select!
      {
        $project: {
          _id: 1,
          userID: 1,
          raza: 1,
          fechaNac: 1,
          isActive: 1,
          isActive: 1,
          createdAt: 1,
          updatedAt: 1,
          razaInfo: 1,
          razaGenero: { $concat: ["$razaInfo.nombreRaza", " ", "$razaInfo.genero"] }
        }
      }
    ])

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
