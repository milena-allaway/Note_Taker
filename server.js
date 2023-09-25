// starter code https://github.com/coding-boot-camp/miniature-eureka
// import all the required dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
//https://www.npmjs.com/package/uuid
// generate a unique id for each note
const { v4: uuidv4 } = require('uuid');
// define the port
const PORT = process.env.PORT || 3001;
// create an instance of express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for serving static files from the public folder
app.use(express.static('public'));

// GET Route for homepage to display index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route for notes page to display notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET Route for retrieving all the notes from db.json
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
});

// POST Route for a new note to the db.json file
app.post('/api/notes', (req, res) => {
    // console.info(`${req.method} request received to add a note`);
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    // run if statement to check if the request body exists
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        // read the db.json file and parse the data to an array of objects
        // add the new note to the array of note objects and write the updated array to the db.json file
        // return the new note to the client
        // reference 11-Express\01-Activities\22-Stu_Modular-Routing from class, used util.js code to write and read file
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
                // console.log(data);
                // console.log(req.body);
              const parsedData = JSON.parse(data);
              parsedData.push(newNote);
            //   console.log(parsedData);
              fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
              err ? console.error(err) : res.json(parsedData)
            )};
        });
        console.log('Note successfully added!')
    } else {
        res.error('Error in adding note');
    };
});

// DELETE Route for a specific note
app.delete('/api/notes/:id', (req, res) => {
    // console.info(`${req.method} request received to delete a note`);
    const noteId = req.params.id;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Get all notes from the db.json file, parse the data
            const parsedData = JSON.parse(data);
            // Filter out the note with the id that matches the noteId we are trying to delete
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            const result = parsedData.filter((note) => note.id !== noteId);
            // console.log(result);
            // Write the filtered notes back to the db.json file
            fs.writeFile('./db/db.json', JSON.stringify(result, null, 4), (err) =>
            err ? console.error(err) : res.json(result)
            );
            console.log('Note successfully deleted!')
        };  
        
    });
});

// Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);