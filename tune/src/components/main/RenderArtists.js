import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { search } from './search'
import Search from './search';


export default function RenderArtists() {

    const token = window.localStorage.getItem("token")
    const [artists, setArtists] = useState([])
    const [searchInput, setSearchInput] = useState('')



    const search = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            q: searchInput,
            type: "track" && "artist"
          }
        })
        
        setArtists(data.artists.items)
      }


      return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={'200px'} height={'200px'} src={artist.images[0].url} alt={artist.name} /> : <div>No Image</div>} 
            {artist.name}
        </div>
      ))
      }

  
