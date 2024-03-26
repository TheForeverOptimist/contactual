import express from "express";
import errorHandler from "./middleware/errorHandler";
import connectDb from "./config/dbConnection";
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const port = process.env.PORT || 3000;

//Express built in a parser which will parse what we get in the req.body
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
