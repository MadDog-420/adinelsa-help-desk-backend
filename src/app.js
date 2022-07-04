import express from "express";
import cors from "cors";
import rolesRoutes from "./routes/roles.routes";
import userRoutes from "./routes/user.routes";
import departamentos from './routes/departamentos.routes';
import estadoSolicitud from './routes/estadosolicitud.routes';
import estadoUsuario from './routes/estado_usuario.routes';
import documento from './routes/documento.routes';
import distrito from './routes/distrito.routes';
import provincia from './routes/provincia.routes';
import tipoSolicitud from './routes/tipo_solicitud.routes';
import clasificacion from './routes/clasificacion.routes';
import impacto from './routes/impacto.routes';
import prioridad from './routes/prioridad.routes';
import SLA from './routes/sla.routes';
import solicitud from './routes/solicitud.routes';
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
app.use("/api",departamentos);
app.use("/api",estadoSolicitud);
app.use("/api",estadoUsuario);
app.use("/api",documento);
app.use("/api",distrito);
app.use("/api",provincia);
app.use("/api",tipoSolicitud);
app.use("/api",clasificacion);
app.use("/api",impacto);
app.use("/api",prioridad);
app.use("/api",SLA);
app.use("/api",solicitud);


export default app;
