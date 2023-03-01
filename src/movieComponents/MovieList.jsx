import React from 'react'

function MovieList({ movieList }) {
  return (
    <div className='text-white'>
      {movieList.map((movie, index) => (
        <div key={index}>{movie}</div>
      ))}
    </div>
  )
}

export default MovieList