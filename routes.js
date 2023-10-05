const express = require("express");
const {
  getXemLichAm,
  getLichThangTot,
  getLichNamTot,
} = require("./controllers");

const router = express.Router();

router.get("/xemlicham/:ngay", getXemLichAm);
router.get("/lichthangtot/:ngay", getLichThangTot);
router.get("/lichnamtot/:ngay", getLichNamTot);

module.exports = router;
