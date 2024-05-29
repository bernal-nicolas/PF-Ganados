const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
  userID: { type: String, required: true },
  raza: { type: String, required: true }, // Se cambia para que tome el nombre, no el ID. 
  fechaNac: { type: Date, required: true },
  isActive: { type: Boolean, required: true, default: true } // Soft Delete 
}, {
  versionKey: false,
  timestamps: true
});

const Ganado = mongoose.model('Ganado', schemaProducto);

module.exports = Ganado;