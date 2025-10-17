// database.js 
// This is going to be my code database to act as the database
import { Anime } from "./Anime.js";

export const animeDB = [
    // adding one default hard coded example of an Anime
    new Anime(
        "Fragrant Flower",
        "Saka Mikami",
        "Clover Works",
        "https://m.media-amazon.com/images/M/MV5BY2Q0NTNlMTAtZGVkYS00NDU1LThjYzYtZDQ3M2U5NGJiNzhkXkEyXkFqcGc@._V1_.jpg",
        "2025-09-07",
        13,
        "An elite girls' school resides next to a boys' school for delinquents. One day, two students from each school, Kaoruko and Rintaro, meet and develop a connection."
    ),
]

// This function will be used to add new anime to the database
export const addAnime = (animeData) => {
    const newAnime = new Anime(
        animeData.title,
        animeData.author,
        animeData.studio,
        animeData.image,
        animeData.releaseDate,
        animeData.episodes,
        animeData.synopsis
    );
    animeDB.push(newAnime);
    return newAnime;
}

// This function will be used to get all the anime from the database
export const getAnimes = () => {
    return animeDB;
}

// This function will be used to get the specific anime from the database
export const getAnime = (title) => {
    const index = animeDB.findIndex(a => a.title.toLowerCase() === title.toLowerCase());
    return index !== -1 ? animeDB[index] : null;
}

// Note really efficent and would definitely benifit from using a real Database in the further
// This is the remove function from the DB that will remove the anime based on it's titled
// Then it will remove it from the DB by finding it's index then splicing it
export const removeAnime = (title) => {
    const index = animeDB.findIndex(a => a.title === title);
    if (index !== -1) {
        return animeDB.splice(index, 1)[0];
    }
    return null;
}