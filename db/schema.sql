DROP DATABASE IF EXISTS songs_dev;
CREATE DATABSE songs_dev;
\connect songs_dev;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN
);