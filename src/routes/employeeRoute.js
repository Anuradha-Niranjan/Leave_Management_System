const express = require("express");
const router = express.Router();

const { signupEmployee, loginEmployee, getProfile, updateProfile, deleteProfile, getAllEmployee} = require("../controllers/employeeController");
const auth = require("../middlewares/auth");
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/signup", signupEmployee);
router.post("/login", loginEmployee);
router.get("/my-profile", auth, getProfile);
router.put("/update", auth, updateProfile);
router.delete("/delete", auth, deleteProfile);

//Admin
router.get("/all-employees", auth, authorizeAdmin, getAllEmployee);

module.exports = router;