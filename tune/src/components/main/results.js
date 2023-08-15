import React from 'react';
import axios from 'axios';
import './results.css';
import './main.css';
import RenderArtists from './RenderArtists';

export default function Results(props) {
  const renderArtists = () => {
    return props.results.artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <a href={artist.external_urls.spotify}>
            <img
              width={'105px'}
              height={'105px'}
              src={artist.images[0].url}
              alt={artist.name}
            />
          </a>
        ) : (
          <div className='no-image'></div>
        )}
        <br />
        {artist.name}
      </div>
    ));
  };

  const renderTracks = () => {
    return props.results.tracks.map((track) => (
      <div key={track.id}>
        <div>{track.name}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className='results-container'>
        <div className='result'>
          <h2>Artists</h2>
          {renderArtists()}
        </div>
        <div className='result'>
          <h2>Tracks</h2>
          {renderTracks()}
        </div>
      </div>
    </div>
  );
}
