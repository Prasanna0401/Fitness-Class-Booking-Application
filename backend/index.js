import express from "express";
import config from "./utils/config.js";
import cors from "cors";
import AppRoutes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(AppRoutes);

app.listen(config.PORT, () =>
    console.log(`Server listening on port ${config.PORT}`)
);