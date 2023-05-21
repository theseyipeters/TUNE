import React, { useState, useEffect }from 'react'
import Search from './search'
import Trending from './trending'
import Playbar from './playbar'
import Results from './results'
import './main.css'




export default function Main() {

const [tracks, setTracks] = useState([])
useEffect( () => {console.log(tracks, "Logging tracks from Main Component")},[tracks])

const [artists, setArtists] = useState([])
useEffect( () => {console.log(artists, "Logging artist from Main Component")},[artists])

  return (
    <div className='main'>
      <Search setSearchArtists={setArtists} setSearchTracks={setTracks}/>
      <Trending />
      <Results results = {artists}/>
      <Playbar />
    </div>
  )
}
