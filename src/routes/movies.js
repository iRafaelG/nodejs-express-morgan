// imports node modules
const { Router } = require('express');
const _ = require('underscore');

// import files
const movies = require('../samples.json');

// initializations
const router = Router();

// routes
router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    let { title, director, year, rating } = req.body;

    if(title && director && year && rating) {
        let id = movies.length + 1;
        let newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({"error":"There was an error"});
    }
    
});

router.put('/:id', (req, res) => {
    let { id } = req.params;
    let { title, director, year, rating } = req.body;

    if(title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if(movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        })
        res.json(movies);
    } else {
        res.status(500).json({"error":"There was an error"});
    }
})

router.delete('/:id', (req, res) => {
    _.each(movies, (movie, i) => {
        if(movie.id == req.params.id) {
            movies.splice(i, 1);
        }
    })
    res.json(movies);
});

// export module
module.exports = router;