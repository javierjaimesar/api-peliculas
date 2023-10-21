const mongoose = require('mongoose')
const password = 1234

const connectionString = `mongodb+srv://javierjaimesar:${password}@cluster0.goxztea.mongodb.net/apiMovies?retryWrites=true&w=majority`

// Coneccion a MongoDB

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log(err);
    })



// Movie.find({}).then(result => {
//     console.log(result);
//     mongoose.connection.close()
// })

// const movie = new Movie(
//     {
//         id_pelis: 34,
//         Title: "Zoolander",
//         Year: "2001",
//         Rated: "PG-13",
//         Released: "28 Sep 2001",
//         Runtime: "90 min",
//         Genre: "Comedy",
//         Director: "Ben Stiller",
//         Writer: "Drake Sather, Ben Stiller, John Hamburg",
//         Actors: "Ben Stiller, Owen Wilson, Christine Taylor",
//         Plot: "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
//         Language: "English",
//         Country: "Germany, United States, Australia",
//         Awards: "1 win & 11 nominations",
//         Poster: "https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg",
//         Ratings: [
//             {
//                 Source: "Internet Movie Database",
//                 Value: "6.5/10"
//             },
//             {
//                 Source: "Rotten Tomatoes",
//                 Value: "65%"
//             },
//             {
//                 Source: "Metacritic",
//                 Value: "61/100"
//             }
//         ],
//         Metascore: "61",
//         imdbRating: "6.5",
//         imdbVotes: "285,148",
//         imdbID: "tt0196229",
//         Type: "movie",
//         DVD: "01 Aug 2013",
//         BoxOffice: "$45,172,250",
//         Production: "N/A",
//         Website: "N/A",
//         Response: "True"
//     }
// )

// movie.save()
//     .then(result => {
//         console.log(result);
//         mongoose.connection.close()
//     })
//     .catch(err => {
//         console.log(err);
//     })