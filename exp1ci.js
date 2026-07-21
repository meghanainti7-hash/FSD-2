"use strict";
let movieTitle = "Baahubali: The Beginning";
let releaseYear = 2015;
let isBlockbuster = true;
function getMovieStatus(title, year) {
    return `${title} was a massive hit released in ${year}`;
}
let leadActors = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);
