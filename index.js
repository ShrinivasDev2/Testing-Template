const express = require("express");
// dot env setup
const dotenv = require("dotenv");
dotenv.config();

// db
require("./config/db");

// importing the routes
const userRouter = require("./routes/userRoutes");

// express intialization
const app = express();
app.use(express.json());
app.use(userRouter);

// Server start
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server is running at : ", PORT);
});
