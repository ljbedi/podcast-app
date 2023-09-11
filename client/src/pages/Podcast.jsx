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
  /* font-family: */
`;

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
      <EpisodeList podcast={podcast} user={user} setUser={setUser} />
    </>
  );
};

export default Podcast;
