const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    id_pelis: Number,
    Title: String,
    Year: String,
    Rated: String,
    Realeased: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: Array,
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String,
    path_peli: String
})

movieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id_pelis = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Movie = model('Movie', movieSchema)

module.exports = Movie