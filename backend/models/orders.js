const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, //buy or sell
});

const OrderModel = new model("order", orderSchema);
module.exports = OrderModel;
