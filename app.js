const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8888;

app.use(cors({origin: `http://192.168.100.24:${port}`}))
app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
});