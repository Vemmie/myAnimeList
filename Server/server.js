// The API controller (This could be split up into 
// different Node instances to have a Mircoservice Arch)
import express from "express";
// importing functiosn from the model 
import { removeAnime, getAnimes, getAnime, addAnime } from "./database.js";

//creating an express app
const app = express();
const PORT = 3000;
app.use(express.json());

// Get route to get all the animes
app.get("/api/animes", (req, res) => {
    res.json(getAnimes());
});

// Get route to get a specific anime based on the title
app.get("/api/anime/:title", (req, res) => {
    const anime = getAnime(req.params.title); //from the url
    if (anime) {
        res.json(anime);
    } else {
        res.status(404).json({message: "Anime not found"})
    }
});

// add route to add anime to the db
app.post("/api/add", (req, res) => {
    const newAnime = addAnime(req.body);
    res.status(201).json(newAnime);

});

// delete route to remove the anime based on the title
app.delete("/api/anime/:title", (req, res) => {
    const title = req.params.title;
    removeAnime(title);
    res.json({ message: "anime has been removed" })
});

// listening to which port it's on
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});