const router = require("express").Router();

const apiRoutes = require("./api.js");
const homeRoutes = require("./html.js");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.export = router;