const express = require('express');
const router = express.Router()

const Todo = require('../controller/todo');
const auth = require('../authentication/authentication')

router.get('/',auth.isLogin,Todo.findAll)
router.post('/',auth.isLogin,Todo.crate)
router.delete('/:id',auth.isLogin,Todo.remove)
router.put('/:id',auth.isLogin,Todo.update)
router.put('/:id/markcompleted',auth.isLogin,Todo.markCompleted)

module.exports = router;
