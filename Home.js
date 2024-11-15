import React from 'react';
import vid from './2439510-hd_1920_1080_30fps.mp4'

function Home () {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>TRAVEL<br />REPEAT.</h1>
        <p><b>Travel far enough, you meet yourself.</b></p>
       
      </div>
      <video autoPlay muted loop className="home-video">
        <source src={vid} type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;
