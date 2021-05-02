import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../api/instance';
import requests from '../api/requests';
import '../css/Banner.css';

function Banner({ movieBannerdata }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    console.log('movie banner data', movieBannerdata);
  }, [movieBannerdata]);

  useEffect(() => {}, [movie]);

  // Funcion para acortar la descripcion
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieBannerdata?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movieBannerdata?.title ||
            movieBannerdata?.name ||
            movieBannerdata?.original_name}
        </h1>
        <hr className="rounded-divider"></hr>
        <h1 className="banner-description">
          {/* {truncate(, 200)} */}
          {movieBannerdata?.overview}
        </h1>
        <div className="banner-fadebottom"></div>
      </div>
    </header>
  );
}

export default Banner;
