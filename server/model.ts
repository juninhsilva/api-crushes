import * as mongoose from "mongoose";

const CRUSH_SCHEMA = new mongoose.Schema({
  nome: { type: String, required: true },
  apelido: { type: String, required: true, unique: true },
  telefone: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

export default mongoose.model('Crush', CRUSH_SCHEMA);
