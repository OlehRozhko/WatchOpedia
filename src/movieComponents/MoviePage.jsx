import React, { useState } from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList';

function MoviePage() {
  const [movieState, setMovieState] = useState(() => {
    return { movieList: ['Die Hard', "Harry Potter"] }
  });

  const handleAddMovie = (movie) => {
    setMovieState(prevState => {
      return {
        ...prevState,
        movieList: [...prevState.movieList, movie]
      }
    });
  }
  return (
    <div className='container col-12 col-md-6 my-3 border'>
      <AddMovie addMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  )
}

export default MoviePage