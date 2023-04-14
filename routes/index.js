const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
console.log("routing...");

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
