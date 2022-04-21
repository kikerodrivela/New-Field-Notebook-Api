import express from "express";
import getRoutes from "./routes/getRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import deleteRoutes from "./routes/deleteRoutes.js";

const app = express();

app.use(getRoutes, postRoutes, deleteRoutes);

export default app;
