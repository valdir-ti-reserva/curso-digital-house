import express from "express";
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";
import authRoutes from "./routes/auth";

const app = express();

app.use(indexRoutes);
app.use(authRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.listen(3000, () => console.log("Servidor rodando"));
