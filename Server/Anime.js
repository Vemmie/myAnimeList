// Anime.js
// This is the class for the objects that will go into the in code database

export class Anime {
    constructor(title, author, studio, image, releaseDate, episodes, synopsis) {
        this.title = title;
        this.author = author;
        this.studio = studio;
        this.image = image;
        this.releaseDate = releaseDate;
        this.episodes = Number(episodes);
        this.synopsis = synopsis;
    }
}