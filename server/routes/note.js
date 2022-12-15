const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/getNote', async (req, res) => {
    try {
      let note = await Note.getNote(req.body);
      res.send({...note})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/create', async (req, res) => {
    try {
      console.log(req.body)
      let note = await Note.createNote(req.body);
      res.send({...note})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/Read', async (req, res) => {
    try {
      let note = await Note.Read(req.body);
      res.send({...note,noteContent})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNotes(req.body);
      res.send({...note, noteContent});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
module.exports = router;