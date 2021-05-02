import React, { useState } from 'react';
import Row from './Row/Row';
import requests from '../api/requests';
import Banner from '../components/Banner';
import '../css/Home.css';

function Home() {
  const [movieBannerdata, setMovieBanner] = useState({});
  function homeCallback(data) {
    console.log('parent home data', data);
    setMovieBanner(data);
  }
  return (
    <div className="Home">
      {/* BANNER */}
      <Banner movieBannerdata={movieBannerdata} />
      {/* VIDEO ROWS */}
      <Row
        ShoutFocusFirstChild={true}
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
        isLargeRow
        homeCallback={homeCallback}
        // HomeFlagCallback={HomeFlagCallback}
      />
      <Row
        ShoutFocusFirstChild={false}
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        homeCallback={homeCallback}
      />
    </div>
  );
}
export default Home;
