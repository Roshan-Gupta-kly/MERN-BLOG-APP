const express = require("express");
const router = express.Router();

//Routes

const locals = {
  title: "Daily Blogs",
  description: "Simple Blog App Created with NodeJs, ExpressJs & MongoDB.",
};
router.get("", (req, res) => {
  res.render("index", { locals }); // it render the index.ejs file as home page
});

router.get("/about", (req, res) => {
  res.render("about", { locals });
});

module.exports = router;
