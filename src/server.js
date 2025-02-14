require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
