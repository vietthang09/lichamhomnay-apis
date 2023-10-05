const db = require("./db");

const getXemLichAm = async (req, res) => {
  const { ngay } = req.params;

  var selectStatement = `SELECT html FROM xemlicham WHERE ngay = "${ngay}"`;
  db.query(selectStatement, (err, result) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.status(200).json({ result: result[0].html });
  });
};

const getLichThangTot = async (req, res) => {
  const { ngay } = req.params;

  var selectStatement = `SELECT html FROM lichthangtot WHERE ngay = "${ngay}"`;
  db.query(selectStatement, (err, result) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.status(200).json({ result: result[0].html });
  });
};

const getLichNamTot = async (req, res) => {
  const { ngay } = req.params;

  var selectStatement = `SELECT html FROM lichnamtot WHERE ngay = "${ngay}"`;
  db.query(selectStatement, (err, result) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.status(200).json({ result: result[0] });
  });
};

module.exports = {
  getXemLichAm,
  getLichThangTot,
  getLichNamTot,
};
