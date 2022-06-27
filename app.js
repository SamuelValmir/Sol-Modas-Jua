const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 8888;

app.use(cors({origin: `http://192.168.100.24:${port}`}))
app.use(express.static(path.join(__dirname, "public")))
// app.use("/img", express.static(path.join(__dirname, "frontend", "assets", "img", "icons")))

// app.get("/", (_, res) => {
//     fs.readFile("./frontend/assets/pages/index.html", (error, data) => {
//         if (error) console.log(error);
//         // res.write(data)
//         res.send(data);
//     });

// });

app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
});