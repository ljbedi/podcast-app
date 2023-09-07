import React, { useState, useEffect } from 'react';
import Podcast from '../components/Podcast';
import SubscribedPodcast from '../components/SubscribedPodcast';
import EpisodeList from '../components/EpisodeList';

const PodcastContainer = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // PODCAST LIST???

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

  // SUBSCRIBED PODCAST??

  const subscribePodcast = (podcast) => {
    if (!subscribedPodcasts.some((p) => p._id === podcast._id)) {
      setSubscribedPodcasts([...subscribedPodcasts, podcast]);
    }
  };

  const unsubscribePodcast = (podcast) => {
    const updatedSubscribedList = subscribedPodcasts.filter((p) => p._id !== podcast._id);
    setSubscribedPodcasts(updatedSubscribedList);
  };

  // ABILITY TO CLICK ON BUTTON AND SUBSCRIBE - SUBSCRIBED PODCAST????

  const handlePodcastClick = (podcastId) => {
    const selectedPodcastInfo = podcasts.find((podcast) => podcast._id === podcastId);
    setSelectedPodcast(selectedPodcastInfo);
  };

  // SEARCH PODCAST BY SEARCH BAR  - HOME???? 


  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for podcasts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <SubscribedPodcast subscribedPodcasts={subscribedPodcasts} unsubscribePodcast={unsubscribePodcast} />

      {selectedPodcast && (
        <>
          <h2>Episodes for {selectedPodcast.name}</h2>
          <EpisodeList podcast={selectedPodcast} />
        </>
      )}

      <h2>Podcasts</h2>
      {filteredPodcasts.map((podcast) => (
        <Podcast
          key={podcast._id}
          podcast={podcast}
          subscribePodcast={subscribePodcast}
          onPodcastClick={() => handlePodcastClick(podcast._id)}
        />
      ))}
    </>
  );
};

export default PodcastContainer;
