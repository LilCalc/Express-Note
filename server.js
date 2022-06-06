// create a GET route to render the notes.html file "/notes"
// create a GET route to render index.html "*"
// create a GET route to read the json file - "/api/notes"
//TODO: create a GET route to read the json file - "/api/notes"
//TODO: create a POST route to create a new note and add it to the json file
//TODO: create a DELETE route containing the id of a note to delete


//require dependencies
const express = require('express');

//create express app
const app = express();

//create PORT variable
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

//server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));