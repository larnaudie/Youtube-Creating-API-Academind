const http = require("http");
//import something from "...something" -> no esta soportado en node.js (en 2018)
const port = process.env.PORT || 3000;
const app = require("./app");

//Para que nos lea el createServer debemos haber importado el http correctamente
const server = http.createServer(app);


server.listen(port);