const { Schema, model } = require("mongoose");

const positionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const PositionModel = new model("position", positionSchema);
module.exports = PositionModel;
