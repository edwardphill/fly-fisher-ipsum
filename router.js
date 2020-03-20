const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let fileContents = fs.readFileSync("./public/index.html", {
    encoding: "utf8"
  });
  res.write(fileContents);
  res.end();
});

router.post("/", (req, res) => {
  req.on("data", function(inputValue) {
    let query = inputValue.toString();
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    let fileContents = fs.readFileSync("./public/index.html", {
      encoding: "utf8"
    });

    fileContents = fileContents.replace(
      "<div class='placeholder-div'></div>",
      loremIpsumText
    );
    res.setHeader("Content-Type", "text/html");
    res.write(fileContents);
    res.end();
  });
});

module.exports = router;
