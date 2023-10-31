const express = require("express");

const { getAllSongs, 
        getOneSong,
        createSong,
        deleteSong,
        updateSong
      } = require("../queries/songs");
const { checkName, checkBoolean } = require("../validations/checkSongs");
const songs = express.Router();


songs.get("/", async (req,res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200)
      .json({ success: true, data: { payload: allSongs } });
      } else {
          res.status(500)
        .json({ sucess: false, data: { error: "Server Error" } });
      }
});

songs.get("/:id", async (req,res) => {
  const { id } = req.params
  const oneSong = await getOneSong(id)
  if (oneSong){
    res.json(oneSong)
  } else {
    res.status(404).json({error: "not found!"})
  }
})

songs.post("/", checkName, checkBoolean, async (req, res)=> {
  try {
    const createdSong = await createdSong(req.body)
    res.json(createdSong)
  } catch (error) {
    res.status(400).json({error:"ERROR"})
  }
})

songs.delete("/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deletedSong(id);
    if(deletedSong) {
      res.status(200).json({sucess:true, payload: {data: deletedSong}})
     } else {
      res.status(404).json("song not found")
     }    
  } catch(err) {
    res.send(err)
  }
});

songs.put("/:id", async(req,res) => {
  const { id } = req.params;
  const updatedSong = await updatedSong(id, req.body);
  if(updatedSong.id) {
    res.status(200).json(updatedSong);
  } else (
    res.status(404).json("no song found with that id")
  )
})

module.exports = songs;
