const express = require("express");
const app = express();
const porta = 3000;

const mulheresInspiradores = require("./route.js");

app.use("/api/", mulheresInspiradores);

app.use(express.json());

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`);
});
