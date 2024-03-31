require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { dbConnect } = require("./config/db");
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(express.json());

// dbConnection
dbConnect();

// routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`listening on ${port}`));
