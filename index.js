import cors from "cors";
import express from "express";
const port = process.env.PORT || 3000;
import UserRoute from "./route/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => console.log(`App is running at port ${port}`));
