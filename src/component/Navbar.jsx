import React from 'react';
import Logo from "../assets/movie.svg"
import Avatar from "../assets/Avatar.svg"
import Shape from "../assets/shape.svg"
import Shape2 from "../assets/shape2.svg"
import Tv from "../assets/tv.svg"
import Book from "../assets/Bookmark.svg"

function Nav() {
  return (
    <div className="w-24 h-[930px] bg-gray-800 text-white flex flex-col -mt-[350px] ml-8 rounded">
      <div className="flex items-center justify-center h-16">
        <span className="text-2xl font-bold"><a href="/"><img src={Logo} alt="logi icon" /></a></span>
      </div>
      <nav className="flex flex-col items-center mt-6 gap-3">
        <a href="#" className="flex items-center justify-center px-6 py-3 hover:bg-gray-700 rounded">
          <img src={Shape} alt='shape icon' className="text-lg mr-3" />
        </a>
        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700 rounded">
          <img src={Shape2} alt='shape2 icon' className="text-lg mr-3" />
        </a>
        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700 rounded">
          <img src={Tv} alt='tv icon' className="text-lg mr-3" />
        </a>
        <a href="/saved-movies" className="flex items-center px-6 py-3 hover:bg-gray-700 rounded">
          <img src={Book} alt='book icon' className="text-lg mr-3" />
        </a>
      </nav>

      <a href="#"><img src={Avatar} alt="avatar icon" className='mt-[550px] mx-auto'/></a>
    </div>
  );
}

export default Nav;
