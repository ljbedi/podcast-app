// import Info from "../components/Podcast/Info";

// <Info/>

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Podcast = () => {
  const {id} = useParams()
    const [podcast, setPodcast] = useState(null);
  
    useEffect(() => {
      fetchPodcast();
    }, []);
  
    const fetchPodcast = () => {
      fetch(`http://localhost:9000/api/podcasts/${id}`)
        .then((res) => res.json())
        .then((data) => setPodcast(data))

        .catch((error) => {
          console.error('Error fetching podcast:', error);
        });
    };
  if (!podcast) 
    return ("Loading")
  
  return (
    <div>{podcast.name}</div>
  )
}

export default Podcast