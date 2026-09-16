const express = require("express");
const router = express.Router();

const {applyLeave, getMyLeaves, getAllLeaves} = require("../controllers/leaveController");

const auth = require("../middlewares/auth");
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/all", auth, authorizeAdmin, getAllLeaves);

router.post("/apply", auth, applyLeave);
router.get("/my-leaves", auth, getMyLeaves)

module.exports = router;