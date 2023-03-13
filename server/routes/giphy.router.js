const express = require('express');
const router = express.Router();

router.get('/:search', (req, res) => {
  console.log('req from client:', req.params.search)
  res.send('hello!');
});

module.exports = router;