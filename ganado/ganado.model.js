const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
    userID: {type: String, required: true},
    type: {type: String, required: true},
    dateBirth: {type: Date, required: true},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    isActive: { type: Boolean, required: true, default: true }
  }, {
    versionKey: false,
    timestamps: true
});
  
const Ganado = mongoose.model('Ganado', schemaProducto);

module.exports = Ganado;