const express = require("express");
const path = require("path");
const cors = require("cors");
// const transporter = require("nodemailer").createTransport(
//     {
//         host: "smtp.gmail.com",
//         service: "gmail",
//         port: 465,
//         secure: true,
//         auth:{
//             user: "samuelvalmir@gmail.com",
//             pass: "Esmaelbananinha21141141!@"
//         }
//     }
// );

const app = express();
const port = 8888;

app.use(cors({ origin: `http://192.168.100.24:${port}` }))
app.use(express.static(path.join(__dirname, "public")))

app.post("/api/sendEmail", (req, res) => {
    console.log(req.query);
    res.end();
});

app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
});

// const mailOptions = {
//     from: "samuelvalmir@gmail.com",
//     to: "samuelvalmir@gmail.com",
//     subject: "Assssssunto",
//     html: "conteudo é esse",
// }

// transporter.sendMail(mailOptions, (error, info)=>{
//     if(error) console.warn(error);
// })