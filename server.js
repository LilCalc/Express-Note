//require dependencies
const express = require('express');
//create PORT variable
const PORT = process.env.PORT || 3000;
//create express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./Routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./Routes/htmlRoutes");
app.use(htmlRoutes);

//server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));