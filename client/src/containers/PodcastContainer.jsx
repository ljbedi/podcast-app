import { useState, useEffect } from 'react';
import Podcast from '../components/Podcast';
import SubscribedPodcast from '../components/SubscribedPodcast';

const PodcastContainer = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = () => {
    fetch('http://localhost:9000/api/podcasts')
      .then((res) => res.json())
      .then((data) => setPodcasts(data));
  };

  const subscribePodcast = (podcast) => {
    console.log(subscribedPodcasts)
    console.log(podcast)
    if (!subscribedPodcasts.some((p) => p._id === podcast._id)) {
      console.log("works")
      setSubscribedPodcasts([...subscribedPodcasts, podcast]);
    }
  };

  const unsubscribePodcast = (podcast) => {
    const updatedSubscribedList = subscribedPodcasts.filter((p) => p._id !== podcast._id);
    setSubscribedPodcasts(updatedSubscribedList);
  };

  return (
    <>
    <SubscribedPodcast subscribedPodcasts={subscribedPodcasts} unsubscribePodcast={unsubscribePodcast} />
      <h2>Podcasts</h2>
      {podcasts.map((podcast) => (
        <Podcast
          key={podcast.id}
          podcast={podcast}
          subscribePodcast={subscribePodcast}
        />
      ))}
    </>
  );
};

export default PodcastContainer;
