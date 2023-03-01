import React, { useState } from 'react';

function AddMovie({ addMovie }) {
  const [movieName, setMovieName] = useState('')

  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie(movieName);
    setMovieName('');
  }
  return (
    <form onSubmit={handleAddMovie}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input value={movieName} onChange={(e) => setMovieName(e.target.value)} type='text' className='form-control' placeholder='Movie Name...' />
        </div>
        <div className="col-2">
          <button className='btn btn-success form-control'>Add</button>
        </div>
        <hr className='mt-3' />
      </div>
    </form>
  )
}

export default AddMovie