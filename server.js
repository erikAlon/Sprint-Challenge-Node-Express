const express = require("express");

// custom middleware
// function logger( req, res, next) {
//     req.url = `${req.url}/1`;

//     next();
// }

// middleware
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const projectsRouter = require("./subApps/projectsRouter.js");
const actionsRouter = require("./subApps/actionsRouter.js");

server.use(helmet());
server.use(express());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);
// server.use(logger);

//initializing port
port = 5003;
server.listen(port, () => console.log("API running on port 5003!"));
