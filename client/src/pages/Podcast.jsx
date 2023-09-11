import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EpisodeList from '../components/Podcast/EpisodeList';
import User from '../components/User/User';
import styled from 'styled-components'; 
import PodcastCard from '../Components/Home/PodcastCard';
// import NavBarTwo from '././components/Header/Nav2';

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
  /* font-family: */
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
  margin: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  padding: 8px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
const PodcastInfo = styled.span`
color: white;
  display: flex;
  max-width: 600px;
  max-height: 283px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #33333389;
  border: 1px solid #ddd;
  border-radius: 12px; 
  border: 1px solid #ddd;
  border-radius: 14px;
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
    <div>
      {/* <NavBarTwo /> */}
    </div>
    <PodcastInfo>
      <PodcastCard podcast={podcast} user={user} setUser={setUser} isHomePage={false}/>
      {/* <PodcastName>{podcast.name}</PodcastName> */}
      <PodcastDesc>{podcast.description}</PodcastDesc>
    </PodcastInfo>
      <EpisodeList podcast={podcast} user={user} setUser={setUser} />
    </>
  );
};

export default Podcast;
