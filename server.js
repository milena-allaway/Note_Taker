// starter code https://github.com/coding-boot-camp/miniature-eureka
// import all the required dependencies
const express = require('express');
const path = require('path');
//https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for serving static files
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET Route for retrieving all the notes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
});

// POST Route for a new note
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
                console.log(data);
                console.log(req.body);
              const parsedData = JSON.parse(data);
              parsedData.push(newNote);
              console.log(parsedData);
              fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
              err ? console.error(err) : res.json(parsedData)
            );
            }
          });
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// DELETE Route for a specific tip
// app.delete('/notes/:id', (req, res) => {
//     const noteId = req.params.id;
//     console.log(noteId);
//     readFromFile('./db/db.json')
//         .then((data) => JSON.parse(data))
//         .then((json) => {
//             // Make a new array of all notes except the one with the ID provided in the URL
//             const result = json.filter((note) => note.id !== noteId);

//             // Save that array to the filesystem
//             readAndAppend(result, './db/db.json');

//             // Respond to the DELETE request
//             res.json(`Item ${noteId} has been deleted 🗑️`);
//         });
// });

// Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);