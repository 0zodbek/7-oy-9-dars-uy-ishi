import React, { useState, useEffect } from 'react';
import axiosGet from '../axios';
import images from '../assets/search.svg';

function Trending() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosGet.get('/movie?rating.imdb=8-10');
        setMovies(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const filteredItems = movies.filter(movie =>
    movie.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const itemsToShow = 4;

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? Math.max(filteredItems.length - itemsToShow, 0) : prevIndex - itemsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex + itemsToShow >= filteredItems.length ? 0 : prevIndex + itemsToShow
    );
  };

  return (
    <div className='flex flex-col gap-6 pt-8 text-white ml-64'>
      <div className='flex gap-2'>
        <img className='-mt-4' src={images} alt="Search icon" />
        <input
          type='text'
          placeholder='Search for movies or TV series'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='mb-4 p-2 rounded-lg border w-72 border-gray-600 bg-gray-800 text-white'
        />
      </div>
      <h2 className='text-white font-small text-3xl'>Trending</h2>
      <div className="relative">
        <div className="container flex gap-4 mx-auto max-w-[1280px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filteredItems.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
              <div key={index} className="w-[380px] h-[200px] bg-gray-800 rounded-xl overflow-hidden mr-4 relative">
                <img src={item.poster?.url || 'https://via.placeholder.com/380x200'} className="w-full h-full object-cover opacity-70" alt={item.name || 'Movie Poster'} />
                <div className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
                  <i className="fa-regular fa-bookmark text-white"></i>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">{item.year} Movie PG</p>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Trending;
