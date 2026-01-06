const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/test", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    userId: req.userId
  });
});

module.exports = router;
