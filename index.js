require('./mongo')
const express = require("express");
const app = express();
const Movie = require('./models/Movie')


const cors = require('cors')
app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/movies", (req, res) => {
  Movie.find({}).then(movies => {
    res.json(movies);
  })
});

app.get("/api/movies/:title", (req, res, next) => {
  const title = req.params.title;

  Movie.find({ Title: { $regex: title, $options: "i" } })
    .then(movies => {
      if (movies && movies.length > 0) {
        return res.json(movies);
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});


app.delete("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error))

});

app.put("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))

});


app.post("/api/movies", (req, res) => {
  const movie = req.body;

  console.log(movie);

  if (!movie.Title) {
    return res.status(400).json({
      error: "movie.content is missing",
      Response: "False",
    });
  }

  const newMovie = new Movie({
    id_pelis: movie.id_pelis,
    Title: movie.Title,
    Year: movie.Year,
    Rated: movie.Rated,
    Realeased: movie.Realeased,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Director: movie.Director,
    Writer: movie.Writer,
    Actors: movie.Actors,
    Plot: movie.Plot,
    Language: movie.Language,
    Country: movie.Country,
    Awards: movie.Awards,
    Poster: movie.Poster,
    Ratings: movie.Ratings,
    Metascore: movie.Metascore,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    imdbID: movie.imdbID,
    Type: movie.Type,
    DVD: movie.DVD,
    BoxOffice: movie.BoxOffice,
    Production: movie.Production,
    Website: movie.Website,
    Response: movie.Response,
    path_peli: movie.path_peli
  });

  newMovie.save()
    .then(savedMovie => {
      res.json(savedMovie)
    })
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

app.use((error, req, res, next) => {
  console.error(`Error: ${error}`)

  if (error.name === 'CastError') {
    res.status(400).send({ error: 'malformatted id' })
  } else {
    res.status(500).send({ error: 'ekisde' })
  }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
