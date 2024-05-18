const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
    userID: {type: String, required: true},
    nombre: {type: String, required: true},
    // Valores de salud por tipo de raza a determinar...
    isActive: { type: Boolean, required: true, default: true } // Soft Delete
  }, {
    versionKey: false,
    timestamps: true
});
  
const Raza = mongoose.model('Raza', schemaProducto);

module.exports = Raza;