const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", socket => {
  socket.on("add message", data => {
    if (data.message && data.author) {
      io.emit("add message", data);
    }
  });
});

const port = process.env.PORT || 3000;

http.listen(port, () => console.log(`Server is runing on port ${port}`));
