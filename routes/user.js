const express = require('express');
const router = express.Router()

const User = require('../controller/user');
const auth = require('../authentication/authentication')

router.get('/',User.findAll)
router.post('/',User.crate)
router.delete('/:id',User.remove)
router.put('/:id',User.update)
router.get('/:id',User.findOne)

module.exports = router;
