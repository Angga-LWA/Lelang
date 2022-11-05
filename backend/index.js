import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import RegionRoute from "./routes/RegionRoute.js";
import EntityRoute from "./routes/EntityRoute.js";
import BranchRoute from "./routes/BranchRoute.js";
import BidRegistRoute from "./routes/BidRegistRoute.js";
import BidOrdRoute from "./routes/BidOrdRoute.js";
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
app.use(UserRoute);
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(RegionRoute);
app.use(EntityRoute);
app.use(BranchRoute);
app.use(BidRegistRoute);
app.use(BidOrdRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server Lelang up and runnng!!');
});