const Blog = require("../models/blogModel");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author");
  res.render("dashboard", { blogs });
};

exports.createBlog = async (req, res) => {
  const { title, imageUrl, content } = req.body;
  await Blog.create({ title, imageUrl, content, author: req.user.id });
  req.flash("success", "Blog created successfully!");
  res.redirect("/dashboard");
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("edit", { blog });
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.author.toString() === req.user.id) {
    blog.title = req.body.title;
    blog.imageUrl = req.body.imageUrl;
    blog.content = req.body.content;
    await blog.save();
    req.flash("success", "Blog updated successfully!");
  } else {
    req.flash("error", "Unauthorized action!");
  }
  res.redirect("/dashboard");
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      req.flash("error", "Blog not found!");
      return res.redirect("/dashboard");
    }

    if (blog.author.toString() !== req.user.id) {
      req.flash("error", "Unauthorized action!");
      return res.redirect("/dashboard");
    }

    await Blog.deleteOne({ _id: req.params.id }); // Correct way to delete
    req.flash("success", "Blog deleted successfully!");
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong!");
    res.redirect("/dashboard");
  }
};
