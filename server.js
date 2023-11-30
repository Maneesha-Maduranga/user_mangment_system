//Import Modules
const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("express-async-errors");

//DbConnector
const { connectDB } = require("./Database/ConnectDb");

const port = process.env.SERVER_PORT || 3000;

//Import Routes
const authRoutes = require("./Routes/Auth");
const studentRoutes = require("./Routes/User")

//Import Middleware
const { routerNotFound } = require("./Middleware/RouterMiddleware");
const { errorHandler } = require("./Middleware/ErrorHandler");

const app = express();

app.use(express.json());
app.use(cors());

//Use Routes
app.use("/api/v1/auth/", authRoutes);
app.use("/api/v1/user/",studentRoutes);

//Use Middleware
app.use(routerNotFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server IS Running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

//Start The Application
startServer();
