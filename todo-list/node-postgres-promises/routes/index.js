var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/todos', db.getAllTodos);
router.get('/api/todos/:id', db.getSingleTodo);
router.post('/api/todos', db.createTodo);
router.put('/api/todos/:id', db.updateTodo);
router.delete('/api/todos/:id', db.removeTodo);

module.exports = router;
