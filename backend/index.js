import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database";
dotenv.config();

const app = express();

(async() => {
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        //setting secure nya automatis jika pake http atau https
        secure: 'auto'
    }
}));

app.use(cors({
    //untuk frontend mengirimkan request beserta cookie dan dengan credentials
    credentials: true,
    //domain yg di ijinkan untuk akses API
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('Server Lelang up and runnng!!');
});