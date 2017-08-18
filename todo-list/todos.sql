DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

CREATE TABLE todo_items (
  ID SERIAL PRIMARY KEY,
  item VARCHAR,
);

INSERT INTO todo_items (item)
  VALUES ();