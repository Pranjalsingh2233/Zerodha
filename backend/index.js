require("dotenv").config();
const authRoute = require("./routes/authRoute");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const HoldingModel = require("./models/holdings");
const PositionModel = require("./models/positions");
const OrderModel = require("./models/orders");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || "8080";
const url = process.env.MONGO_URL;

main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url);
}

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingModel.find({});
  res.json(holdings);
});

app.get("/allPositions", async (req, res) => {
  const positions = await PositionModel.find({});
  res.json(positions);
});

app.post("/newOrder", async (req, res) => {
  const data = req.body;
  const newOrder = new OrderModel(data);
  await newOrder.save();
  res.json("Order saved!");
});

app.listen(PORT, () => {
  console.log("App started!");
});
