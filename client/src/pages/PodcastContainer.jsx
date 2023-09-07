import React, { useState, useEffect } from 'react';
import Podcast from '../components/Podcast';
// import SubscribedPodcast from '../components/SubscribedPodcast';
import EpisodeList from '../components/Podcast/EpisodeList';

// import PodcastList from '../components/Home/PodcastList';
// import PodcastCard from '../components/Home/PodcastCard';


const PodcastContainer = () => {
  

  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);




 

  const handlePodcastClick = (podcastId) => {

  const selectedPodcastInfo = podcasts.find((podcast) => podcast._id === podcastId);
    setSelectedPodcast(selectedPodcastInfo);
  };

  return (
    <>
      <SubscribedPodcast subscribedPodcasts={subscribedPodcasts} unsubscribePodcast={unsubscribePodcast} />
      
      {selectedPodcast && (
        <>
          <h2>Episodes for {selectedPodcast.name}</h2>
          <EpisodeList podcast={selectedPodcast} />
          <PodcastCard/>


        </>
      )}

    
    </>
  );
};

export default PodcastContainer;
