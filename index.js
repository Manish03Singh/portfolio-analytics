import express from "express";
import router from "./routes/route.js";
import cors from 'cors'
import DBConnection from "./database/db.js";
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/',router)
DBConnection();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})