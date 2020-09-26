const express = require("express");
const router = express.Router();
const mulheres = require("./mulheres_inspiradoras.json");

//@route GET /mulheres
router.get("/mulheres", (req, res) => {
  res.status(200).json(mulheres);
});

//@route GET /mulheres/:id

router.get("/mulheres/:id", (req, res) => {
  const { id } = req.params;
  const mulher = mulheres.find((item) => item.id == id);

  if (!mulher) return res.status(404).json();

  res.status(200).json(mulher);
});

module.exports = router;
