import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import RegionRoute from "./routes/RegionRoute.js";
import EntityRoute from "./routes/EntityRoute.js";
import BranchRoute from "./routes/BranchRoute.js";
import BidRegistRoute from "./routes/BidRegistRoute.js";
import BidOrdRoute from "./routes/BidOrdRoute.js";
import BidLogsRoute from "./routes/BidLogsRoute.js";
import MigrationsRoute from "./routes/MigrationsRoute.js"
import WardRoute from "./routes/WardRoute.js";
import ProductImgRoute from "./routes/ProductImgRoute.js";
import ProductTypeRoute from "./routes/ProductTypeRoute.js";
import BankRoute from "./routes/BankRoute.js";
import AuctionTypeRoute from "./routes/AuctionTypeRoute.js";
import GuaranteeRoute from "./routes/GuaranteeRoute.js";
import BeaNominalRoute from "./routes/BeaNominalRoute.js";
import BeaTypeRoute from "./routes/BeaTypeRoute.js";
import BlacklistRoute from "./routes/BlacklistRoute.js";
import PpnRoute from "./routes/PpnRoute.js";
import PasswordResetRoute from "./routes/PasswordResetRoute.js";
import PersonalAccessTokenRoute from "./routes/PersonalAccessTokenRoute.js";
import AuctionApplFeeRoute from "./routes/AuctionApplFeeRoute.js";
import FailedJobRoute from "./routes/FailedJobRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
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
app.use(cookieParser());
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(RegionRoute);
app.use(EntityRoute);
app.use(BranchRoute);
app.use(BidRegistRoute);
app.use(BidOrdRoute);
app.use(BidLogsRoute);
app.use(MigrationsRoute);
app.use(WardRoute);
app.use(ProductImgRoute);
app.use(ProductTypeRoute);
app.use(BankRoute);
app.use(AuctionTypeRoute);
app.use(GuaranteeRoute);
app.use(BeaNominalRoute);
app.use(BeaTypeRoute);
app.use(BlacklistRoute);
app.use(PpnRoute);
app.use(PasswordResetRoute);
app.use(PersonalAccessTokenRoute);
app.use(AuctionApplFeeRoute);
app.use(FailedJobRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server Lelang up and runnng!!');
});