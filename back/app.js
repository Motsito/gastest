const express = require("express");
const estacion = require("./controllers/estacion");

const app = express();

let port = 3000;

//app.get("/estacion/:id", estacion);

app.listen(port, console.log(`Server is listening on port ${port}...`));
