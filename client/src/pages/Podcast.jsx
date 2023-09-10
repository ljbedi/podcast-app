// import Info from "../components/Podcast/Info";

// <Info/>

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import EpisodeList from '../components/Podcast/EpisodeList'
import User from '../components/User/User'
import NavBar from '../components/Header/Nav'



const Podcast = () => {
  const {id} = useParams()
    const [podcast, setPodcast] = useState(null);
    const [user, setUser] = useState(null);

  
    useEffect(() => {
      fetchPodcast();
    }, []);

    useEffect(() => {
      fetchUser();
    }, []);

    const fetchUser = () => {
      fetch (`http://localhost:9000/api/users`)
      .then ((res)=> res.json ())
      .then ((data) => setUser (data[0]))
    }
  
    const fetchPodcast = () => {
      fetch(`http://localhost:9000/api/podcasts/${id}`)
        .then((res) => res.json())
        .then((data) => setPodcast(data))

        .catch((error) => {
          console.error('Error fetching podcast:', error);
        });
    };
  if (!podcast || !user)
    return ("Loading")
  
  return (
    <>
      <NavBar/>
      <h1>{podcast.name}</h1>
      <EpisodeList podcast={podcast} user={user} setUser={setUser}/>
    </>
  )
}

export default Podcast