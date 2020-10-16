const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")


router.use("/api", apiRoutes);
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;

