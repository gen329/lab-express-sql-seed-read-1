DROP DATABASE IF EXISTS tuner_songs;
CREATE DATABSE tuner_songs;
\connect tuner_songs;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN
);