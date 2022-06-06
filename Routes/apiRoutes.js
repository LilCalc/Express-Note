// dependencies
const express = require("express");
const router = express.Router();
const DB = require("../db/DB");
const { v4: uuidv4 } = require('uuid');

// route to get notes
router.get("/api/notes", async function (req, res) {
  const notes = await DB.readNotes();
  return res.json(notes);
});

// route to add a new note and add it to the json file
router.post("/api/notes", async function (req, res) {
  const currentNotes = await DB.readNotes();
  let newNote = {
    id: uuidv4() , // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    title: req.body.title,
    text: req.body.text,
  };

  await DB.addNote([...currentNotes, newNote]);

  return res.send(newNote);
});

// // route to delete notes
router.delete("/api/notes/:id", async function (req, res) {
  const noteToDelete = req.params.id;
  const currentNotes = await DB.readNotes();
  const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);

  await DB.deleteNote(newNoteData);
  
  return res.send(newNoteData);
});

module.exports = router;