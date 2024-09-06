import React, { useEffect, useState } from 'react';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    setSavedMovies(movies);
  }, []);

  return (
    <div className='mb-32'>
      <h2 className='text-white font-small text-3xl mt-8'>Saved Movies</h2>
      <div className="container mx-auto max-w-[1280px] grid grid-cols-4 gap-12">
        {savedMovies.length > 0 ? (
          savedMovies.map(movie => (
            <div key={movie.id} className="cards relative mt-10 w-[280px] h-[200px]">
              {movie.poster && movie.poster.url ? (
                <img src={movie.poster?.url} alt={movie.title || 'Movie Poster'} className='rounded-xl w-full h-[174px]' />
              ) : (
                <div className='bg-gray-700 rounded-xl w-full h-[174px] flex items-center justify-center'>
                  <p className='text-white'>No Image</p>
                </div>
              )}
              <h3 className='text-white font-bold'>{movie.year} Movie PG</h3>
              <h3 className='text-white font-bold'>{movie.name || 'No Title Available'}</h3>
            </div>
          ))
        ) : (
          <p className='text-white text-xl'>No saved movies</p>
        )}
      </div>
    </div>
  );
}

export default SavedMovies;
