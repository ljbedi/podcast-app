import React, { useState, useEffect } from 'react';
import PodcastCard from './PodcastCard';
// import SubscribedPodcast from '../Buttons/SubscribeBtn';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = () => {
    fetch('http://localhost:9000/api/podcasts')
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((error) => {
        console.error('Error fetching podcasts:', error);
      });
  };

  return (
    <>
      <h2>Podcasts</h2>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast._id} podcast={podcast} />
      ))}
        {/* <SubscribedPodcast/> */}
    </>
  );
};

export default PodcastList;

          // subscribePodcast={subscribePodcast}
          // onPodcastClick={() => handlePodcastClick(podcast._id)}