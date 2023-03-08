const express = require("express");
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//listen for post requests and get content
app.post("/", (req, res) => {
    res.render("public/index.html", { answer: req.body.question });
});
