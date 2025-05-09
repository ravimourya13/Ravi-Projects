const express = require("express");
const mongoose = require("./config/database");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
require("./config/passport");
const methodOverride = require("method-override");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.message = req.flash();
  next();
});

// Routes
app.use("/", require("./routes/userRoutes"));
app.use("/blogs", require("./routes/blogRoutes"));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
