import React from 'react';
import PodcastCard from './Home/PodcastCard';

const SubscribedPodcast = ({podcasts, user, setUser}) => {




  return (

    <div>
      <h2>Subscribed Podcasts</h2>
      <ul>
      {podcasts.filter(podcast => user.subscribedPodcasts.some(id => podcast._id == id)).map((podcast) => (
        <PodcastCard key={podcast._id} 
        podcast={podcast} 
        user = {user} 
        setUser ={setUser}
        />
        ))}
      </ul>
      {user.subscribedPodcasts.length === 0 && <p>No subscriptions yet!</p>}
    </div>
  );
};

export default SubscribedPodcast;