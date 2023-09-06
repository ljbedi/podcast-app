import React from 'react'
import {useState, useEffect} from 'react'
import Podcast from "../components/Podcast"
import PodcastList from "../components/PodcastList"
// import PodcastService from "../components/PodcastService"
import {getPodcasts} from "../components/PodcastService"
import PodcastModal from '../components/PodcastModal'

const PodcastContainer = () => {
  const [podcasts, setPodcasts] = useState ([]);
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState (null)


  useEffect(() => {
    fetchPodcasts()
  }, [])

  const fetchPodcasts = () => {
    fetch("http://localhost:9000/api/podcasts")
    .then((res) => res.json())
    .then((data) => setPodcasts(data))
    .catch((error) => console.error('Error fetching podcasts:', error));
    ;

  }

  // podcastmodal

  const openModal = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const closeModal = () => {
    setSelectedPodcast(null);
  };

    return (
      <>
      
        <h2>Podcasts</h2>
  
        {podcasts.map((podcast) => (
          <div
            key={podcast._id}
            className="podcast-card"
            onClick={() => openModal(podcast)}
          >
            <h3>{podcast.name}</h3>
          
          </div>
        ))}
        
  
        {selectedPodcast && (
          <PodcastModal podcast={selectedPodcast} onClose={closeModal} />
        )}
      </>
    );

    
  };
  
  
  // const EpisodeList = ({ episodes }) => {
  //   return (
  //     <div>
  //       <h2>Episodes</h2>
  //       {episodes.map((episode) => (
  //         <Episode key={episode.id} episode={episode} />
  //       ))}
  //     </div>
  //   );
  // };

  // const Episode = ({ episode }) => {
  // return (
  //   <div>
  //     <h3>{episode.name}</h3>
  //     <p>{episode.description}</p>
  //     <audio controls>
  //       <source src={episode.audioUrl} type="audio/mpeg" />
  //     </audio>
  //   </div>
  // );
// };

  
export default PodcastContainer;
