//DEPENDENCIES
const express = require("express");
const app = express();
path = require("path");

app.use(express.static(path.join(__dirname)));
// app.use("/styles", express.static(__dirname));
app.use("/scripts", express.static(__dirname + "/assets"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "index.html"));
});

app.listen(process.env.PORT || 8080);
console.log("server is running on 8080");