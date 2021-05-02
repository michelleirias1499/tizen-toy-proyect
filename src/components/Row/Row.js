import React, { useState, useEffect } from 'react';
import instance from '../../api/instance';
import '../../css/Row.css';
import RowItem from './RowItem';
import FocusableList from '../Focus/FocusableList';
import { focusKeys } from '../Focus/focusableHelper';
import Home from '../Home';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({
  title,
  fetchUrl,
  ShoutFocusFirstChild,
  homeCallback,
  HomeFlagCallback,
}) {
  const [movies, setMovies] = useState([]);
  const [movieData, setMoviedata] = useState('');

  function parentCallback(data) {
    console.log('parent row data', data);
    homeCallback(data);
  }

  // function flagCallback(flag) {
  //   console.log('flag', flag);
  //   HomeFlagCallback(flag);
  // }

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log('pelis', request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const renderMovies = () => {
    return movies.map((movie, index) => (
      <RowItem
        movie={movie}
        isLargeRow
        baseURL={baseURL}
        movieTitle={movie.title}
        index={index}
        movieData={movieData}
        parentCallback={parentCallback}
        // flagCallback={flagCallback}
      />
    ));
  };

  // useEffect(() => {}, [movies]);
  if (movies.length === 0) {
    return null;
  }

  return (
    <FocusableList
      focusFirstChild={ShoutFocusFirstChild}
      className="movies-row"
      focusKeys={focusKeys.row}
    >
      <div className="Row">
        {/* Title of Row */}
        <h2>{title}</h2>
        <div className="row-posters movie-list">{renderMovies()}</div>
      </div>
    </FocusableList>
  );
}

export default Row;
