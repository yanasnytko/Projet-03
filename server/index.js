const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // pour pouvoir utiliser autre chose que json

app.get("/", (req, res) => { // url, fonction callback; 1 requet 2 reponse définie dans la fonction
  res.json({ message: "Hello world" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});