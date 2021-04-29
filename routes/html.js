const router = require('express').Router();
const path = require('path'); 

//display home page route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//display exercise page route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//disiplay stats page route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

 module.exports = router