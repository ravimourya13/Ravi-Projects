const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/userController");
const { ensureAuthenticated } = require("../middleware/authMiddleware");
const Blog = require('../models/blogModel.js');
const router = express.Router();

router.get("/register", (req, res) => res.render("register"));
router.post("/register", registerUser);
router.get("/login", (req, res) => res.render("login"));
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/dashboard", ensureAuthenticated,async (req, res) => {
    
        const blogs = await Blog.find().populate("author"); // Fetch all blogs with author details
        res.render("dashboard", { user: req.user, blogs }); // Pass blogs to EJS
     
});
module.exports = router;
