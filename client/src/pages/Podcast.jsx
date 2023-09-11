import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EpisodeList from '../components/Podcast/EpisodeList';
import User from '../components/User/User';
import styled from 'styled-components'; 

const PodcastName = styled.h1`
  text-align: center;
  font-size: 24px; 
  font-weight: bold; 
  text-align: center;
  font-weight: bold;
  font-family: 'Avenir Next', sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 1rem;
`;

const PodcastDesc = styled.div`
  text-align: center;
  font-size: 24px; 
  /* font-weight: bold;  */
  text-align: center;
  /* font-weight: bold; */
  font-family: 'Avenir Next', sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const Podcast = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchPodcast();
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch(`http://localhost:9000/api/users`)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  };

  const fetchPodcast = () => {
    fetch(`http://localhost:9000/api/podcasts/${id}`)
      .then((res) => res.json())
      .then((data) => setPodcast(data))
      .catch((error) => {
        console.error('Error fetching podcast:', error);
      });
  };

  if (!podcast || !user) return 'Loading';

  return (
    <>
      <PodcastName>{podcast.name}</PodcastName>
      <PodcastDesc>{podcast.description}</PodcastDesc>
      <EpisodeList podcast={podcast} user={user} setUser={setUser} />
    </>
  );
};

export default Podcast;
