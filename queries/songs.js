const db = require("../db/dbConfig");

const getOneSong = async () => {;
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs
  } catch(err) {
    return err
  }
}

const createSong = async (name) => {
  try {
    const createdSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite])
    return createdSong
  } catch (error) {
    return error
  }
}

const deleteSong = async (name) => {
  try {
    const deletedSong = await db.one("DELETE from songs WHERE name = $1 RETURNING *", name)
    return deletedSong
  } catch(error) {
    return error
  }
};

const updateSong = async (name) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3,time=$4, is_favorite=$5 WHERE name=$6 RETURNING *", [name,artist,album,time,is_favorite,name]);
    return updateSong
  } catch(err) {
    return err
  }
};



module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong
} = require("../queries/songs.js");