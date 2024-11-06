import express from "express";
import cors from "cors";

import UserRoute from "./routes/userRoutes.js";
import KelasRoute from "./routes/kelasRoutes.js";
import { syncUserKelas } from "./models/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

syncUserKelas();

app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(KelasRoute);

app.listen(PORT, ()=> console.log( `Server running on port ${PORT}`));