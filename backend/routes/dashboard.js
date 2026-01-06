const express = require("express");
const Dashboard = require("../models/Dashboard");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* ================= SAVE DASHBOARD ================= */
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { name, config } = req.body;

    if (!name || !config) {
      return res.status(400).json({ message: "Name and config required" });
    }

    const dashboard = new Dashboard({
      userId: req.userId,
      name,
      config
    });

    await dashboard.save();

    res.status(201).json({ message: "Dashboard saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= LOAD USER DASHBOARDS ================= */
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const dashboards = await Dashboard.find({ userId: req.userId })
      .sort({ createdAt: -1 });

    res.json(dashboards);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= GET DASHBOARD BY ID ================= */
router.get("/:id", authMiddleware, async (req, res) => {
  console.log("Dashboard ID:", req.params.id);
  console.log("User ID from token:", req.userId);

  try {
    const dashboard = await Dashboard.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!dashboard) {
      return res.status(404).json({ message: "Dashboard not found" });
    }

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


/* ================= UPDATE DASHBOARD NAME ================= */
router.put("/update/:id", authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Dashboard name required" });
    }

    const updated = await Dashboard.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { name: name.trim() },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Dashboard not found" });
    }

    res.json({ message: "Dashboard renamed successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= DELETE DASHBOARD ================= */
router.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Dashboard.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!deleted) {
      return res.status(404).json({ message: "Dashboard not found" });
    }

    res.json({ message: "Dashboard deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});




module.exports = router;
