import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();


connectDb();
const app = express();

const port = process.env.PORT || 3000;

//Express built in a parser which will parse what we get in the req.body
app.use(express.json());

app.use("/api/contacts", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
