import React, { useEffect, useState, useCallback } from 'react';
import '../../css/Row.css';
import Focusable from '../Focus/Focusable';
import { Link } from 'react-router-dom';
import { useRoutes, A } from 'hookrouter';
import Player from '../Landing';
import { useDispatch } from 'react-redux';
import useNavigation from '../../redux/useNavigation';
import { SCREEN_COMPONENTS } from '../../utils/constants';
import { SCREEN_NAMES } from '../../../../../Downloads/qobuz-tizen/src/utils/constants';

const RowItem = (props) => {
  const {
    movie,
    isLargeRow,
    baseURL,
    movieTitle,
    parentCallback,
    flagCallback,
  } = props;

  const changeView = useNavigation();

  const onBecameFocused = () => {
    // //Aqui va lo logica de hacer que cambie la metadata
    parentCallback(movie);
    console.log('aqui esta movie', movie);
  };

  const onItemEnterPresed = () => {
    //Hacer dispatch para que se guarde en el estado de redux el nombre de la nueva pantalla
    changeView(SCREEN_COMPONENTS.LANDING, { movie });
  };

  return (
    <Focusable
      className="movie-item"
      focusKey={movieTitle}
      onBecameFocused={onBecameFocused}
      onEnterPress={onItemEnterPresed}
    >
      <div>
        <img
          className={`img-posters ${isLargeRow && 'img-postersLarge'}`}
          key={movie.id}
          src={`${baseURL}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.title}
          // onClick={ClickOnMovie}
        />
      </div>
    </Focusable>
  );
};

export default RowItem;
