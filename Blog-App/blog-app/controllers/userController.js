const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashedPassword });
  req.flash("success", "Registration successful, please login!");
  res.redirect("/login");
};

exports.loginUser = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true,
});

exports.logoutUser = (req, res) => {
  req.logout(() => {
    req.flash("success", "Logged out successfully");
    res.redirect("/login");
  });
};
