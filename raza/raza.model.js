const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
  userID: { type: String, required: true },
  nombreRaza: { type: String, required: true },
  pesoMinimo: { type: Number, required: true },
  pesoMaximo: { type: Number, required: true },
  temperaturaCorporal: { type: Number, required: true },
  estaturaMinima: { type: Number, required: true },
  estaturaMaxima: { type: Number, required: true },
  genero: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true } // Soft Delete 
}, {
  versionKey: false,
  timestamps: true
});

const Raza = mongoose.model('Raza', schemaProducto);

module.exports = Raza;