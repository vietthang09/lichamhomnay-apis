const express = require("express");
const lichamhomnay = require("./routes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api", lichamhomnay);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
