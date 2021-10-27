const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error: " + err));

app.use(express.json());
app.use("api/users", userRoute);
app.use("api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
