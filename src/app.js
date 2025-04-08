import express from "express";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

app.set("port", 5000)

app.use("/api/clientes", clientesRoutes);

export default app;