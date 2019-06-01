const express = require("express");
const cors = require("cors");
const upload = require("./upload");

const server = express();
var corsOptions = {
  origin: "*",
  optionSuccessStatus: 200
};

server.use(cors(corsOptions));
server.post("/upload", upload);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
