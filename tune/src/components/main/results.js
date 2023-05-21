import React from 'react'
import axios from 'axios'
import './results.css'
import './main.css'
import RenderArtists from './RenderArtists'



export default function Results(props) {

  const renderArtists = () => {
    return props.results.map(artist => (
      <div key={artist.id}>
          {artist.images.length ? <a href={artist.external_urls.spotify}><img width={'210px'} height={'210px'} src={artist.images[0].url} alt={artist.name} /></a> : <div className='no-image'></div> } 
          <br />
          {artist.name}
      </div>
    ))
  }

  return (
    <div>
      <div className='results-container'>
        <div className='result'>
          {renderArtists()}
        </div>
    
      </div>

        
    </div>
  )
}

