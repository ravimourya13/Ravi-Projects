const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Blogs", BlogSchema);
