var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/puppies';
var db = pgp(connectionString);

// add query functions

//Get all
function getAllTodos(req, res, next) {
  db.any('select * from todo_items')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL todos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Get single
function getSingleTodo(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from todo_items where id = $1', todoID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE todo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Post
function createTodo(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into todo_items(item)' +
      'values(${item})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one todo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Put
function updateTodo(req, res, next) {
  db.none('update todo_items set item=$1, where id=$2',
    [req.body.item, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated todo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Delete
function removeTodo(req, res, next) {
  var todoID = parseInt(req.params.id);
  db.result('delete from todo_items where id = $1', todoID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} todo`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllTodos: getAllTodos,
  getSingleTodo: getSingleTodo,
  createTodo: createTodo,
  updateTodo: updateTodo,
  removeTodo: removeTodo
};