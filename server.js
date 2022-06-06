//require dependencies
const express = require('express');

//create express app
const app = express();

//create PORT variable
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("../miniature-eureka/Routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("../miniature-eureka/Routes/htmlRoutes");
app.use(htmlRoutes);

//server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));