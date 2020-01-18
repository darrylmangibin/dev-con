const express = require('express');
const router = express.Router();

// @route     GET api/usets/test
// @desc      Test users route
// @access    Public// TEST
router.get('/test', (req, res) => {
  res.json({ msg: 'Users works' })
})

module.exports = router;