const express = require("express");
const { getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const { ensureAuthenticated } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", ensureAuthenticated, getAllBlogs);
router.get("/new", ensureAuthenticated, (req, res) => {
    res.render("create"); 
  });
router.post("/", ensureAuthenticated, createBlog);
router.get("/:id/edit", ensureAuthenticated, getBlog);
router.put("/:id", ensureAuthenticated, updateBlog);
router.delete("/:id", ensureAuthenticated, deleteBlog);

module.exports = router;
