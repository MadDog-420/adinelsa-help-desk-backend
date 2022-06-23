import express from "express";
import cors from "cors";
import rolesRoutes from "./routes/roles.routes";
import userRoutes from "./routes/user.routes";
import incidenciasRoutes from "./routes/incidencias.routes";
import estadoRoutes from "./routes/estadoIn.router";
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", rolesRoutes);
app.use("/api", userRoutes);
app.use("/api", incidenciasRoutes);
app.use("/api", estadoRoutes);

export default app;
