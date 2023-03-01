import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'
import Header from './Header'
import MoviePage from './movieComponents/MoviePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='p-2 m-2 row text-center'>
      <Counter />
      <MoviePage />
    </div>
  </React.StrictMode>,
)
