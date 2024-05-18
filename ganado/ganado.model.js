const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
    userID: {type: String, required: true},
    razaID: {type: String, required: true},
    fechaNac: {type: Date, required: true},
    genero: {type: String, required: true},
    isActive: { type: Boolean, required: true, default: true } // Soft Delete
  }, {
    versionKey: false,
    timestamps: true
});
  
const Ganado = mongoose.model('Ganado', schemaProducto);

module.exports = Ganado;