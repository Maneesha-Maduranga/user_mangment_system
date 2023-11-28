//Import Modules
const express = require('express')
require('dotenv').config()
const cors = require('cors')

const {connectDB} = require('./Database/ConnectDb')

const port = process.env.SERVER_PORT || 3000;

//Import Routes
const authRoutes = require('./Routes/Auth')
//Import Middleware
const {routerNotFound} = require('./Middleware/RouterMiddleware')

const app = express()

app.use(express.json());
app.use(cors())

//Use Routes
app.use('/api/v1/auth/', authRoutes);


//Use Middleware
app.use(routerNotFound)

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