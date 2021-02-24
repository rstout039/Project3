const router = require("express").Router();
const jobRoutes = require("./jobs");

// Job Routes //

router.use("/jobs", jobRoutes);

module.exports = router;