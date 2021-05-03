import React, { useEffect, useState, useRef } from 'react';
import instance from '../api/instance';
import requests from '../api/requests';
import '../css/Landing.css';
import FocusableList from '../components/Focus/FocusableList';
import useNavigation from '../redux/useNavigation';
import { SCREEN_COMPONENTS } from '../utils/constants';
import { focusKeys } from '../components/Focus/focusableHelper';
import { useSelector } from 'react-redux';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Player() {
  const currentMovie = useSelector((state) => state.navigation.viewProps);
  console.log('el current movie', currentMovie);
  const [movie, setMovie] = useState([]);
  const licensePlateRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
    }
    fetchData();
  }, []);

  const changeView = useNavigation();

  const backToHome = (keyCode) => {
    console.log('ENTRO');
    console.log('key', keyCode);
    switch (keyCode) {
      case 10009:
        changeView(SCREEN_COMPONENTS.HOME);
        break;
      default:
        break;
    }
  };

  useEffect(() => {}, [currentMovie]);

  return (
    <FocusableList
      tabIndex={0}
      onKeyDown={backToHome}
      tabIndex={0}
      focusKey={focusKeys.landing}
      itemRef={licensePlateRef}
      focusSelf
    >
      <div
        className="landing"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentMovie.movie.backdrop_path}")`,
        }}
      >
        <div className="landing-content">
          <h1 className="landing-title">
            {currentMovie?.movie.title ||
              currentMovie?.movie.name ||
              currentMovie?.movie.original_name}
          </h1>
          <div className="landing-flex">
            <div className="content-left">
              <div className="landing-description">
                <h2 className="movie-rating">
                  Rating: {currentMovie?.movie.vote_average}/10
                </h2>
                <hr className="rounded-divider-left"></hr>
                <h3 className="movie-sinopsis">
                  Sinopsis: {currentMovie?.movie.overview}
                </h3>
              </div>
            </div>
            <div className="content-right">
              <div className="other-information">
                <h3 className="movie-languages">
                  Language: {currentMovie?.movie.original_language}, eng, es
                </h3>
                <hr className="rounded-divider"></hr>
                <h3 className="movie-title-original">
                  Original Title: {currentMovie?.movie.original_title}
                </h3>
                <hr className="rounded-divider"></hr>
                <h3 className="date-launch">
                  Release Date: {currentMovie?.movie.release_date}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusableList>
  );
}

export default Player;
