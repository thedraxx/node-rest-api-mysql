import express from 'express';
import PaginasRoutes from "./routes/paginas_routes.js"




const app = express();

app.use(express.json());



app.use("/api", PaginasRoutes);

app.use((req, res, next) => {res.status(404).json({message: "not found"})} )

export default app;