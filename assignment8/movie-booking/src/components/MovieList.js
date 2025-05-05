import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import '../App.css';

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Movies</h2>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => navigate(`/details/${movie.id}`)}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
