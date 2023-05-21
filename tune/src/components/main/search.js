import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './main.css'

export default function Search(props) {

  
  const [searchInput, setSearchInput] = useState('')
  const [artists, setArtists] = useState([])
  const [tracks, setTracks] = useState([])

  const token = window.localStorage.getItem("token")
  



  // const renderArtists = () => {
  //   return artists.map(artist => (
  //     <div key={artist.id}>
  //         {artist.images.length ? <img width={'200px'} height={'200px'} src={artist.images[0].url} alt={artist.name} /> : <div>No Image</div>} 
  //         {artist.name}
  //     </div>
  //   ))
  // }




  const search = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchInput,
        type: "artist" 
      }
    })

    console.log(data)
    
    props.setSearchArtists([...data.artists.items])
    // props.setSearchTracks ([...data.tracks])

    
   
    
  }
    


  return (
    <div className='search-pane'>
      <div className='arrows'>
        <i className='fas fa-arrow-left'></i>
        <i className='fas fa-arrow-right'></i>
      </div>
      <div className='search-container'>
        <i className='fas fa-search'></i>
        <form className='form-bar' onSubmit={search}>
        <input  onChange={event => setSearchInput(event.target.value)} type='text' className='searchbar' placeholder='Search artist, albums and tracks...' />
        <button type='submit' className='btn' onClick={search}>Search</button>
        </form> 
      </div>
    </div>
  )
}



