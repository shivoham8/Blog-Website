import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
const port = 3000;

let posts = [];

app.get("/", (req,res) => {
    res.render("index.ejs", { posts });
})

app.get("/create", (req,res) => {
    res.render("create.ejs");
})

app.post("/create", (req,res) => {
    const title = req.body.title;
    const content = req.body.content;

    posts.push({title ,  content});
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})