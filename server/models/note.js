const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    userID INT NOT NULL AUTO_INCREMENT,
    noteID INT NOT NULL,
    noteContent VARCHAR(250),
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all notes in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}


// Read Note
async function Read(note) { // {userName: "sda", password: "gsdhjsga"}
  let cNote = await getnote(note); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cNote[0]) throw Error("NoteID not found");
  

  return cNote[0];
}

// Update Note function
async function editNotes(note) {
  let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE userID = ${note.userID}
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE userID = ${note.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getNote(note) {
  let sql;

  if(note.userID) {
    sql = `
      SELECT * FROM notes
       WHERE userID = ${note.userID}
    `
  } else {
    sql = `
    SELECT * FROM notes 
      WHERE noteID = "${note.noteID}"
  `;
  }
  return await con.query(sql);  
}

/*
let cathy = {
  userID: 5,
  noteID: 6,
  noteContent: "icecream"
}; 
Read(cathy);
*/

module.exports = { getAllNotes, Read, editNotes, deleteNote};