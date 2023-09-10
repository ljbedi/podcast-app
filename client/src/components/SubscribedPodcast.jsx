import React from 'react';
import PodcastCard from './Home/PodcastCard';
import styled from 'styled-components';

const SubscribedPodcastContainer = styled.div`
  text-align: center;
  font-weight: bold;
  font-family: 'Avenir Next', sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubscribedPodcast = ({ podcasts, user, setUser }) => {
  return (
    <div>
      <SubscribedPodcastContainer>What You're Vibing Now</SubscribedPodcastContainer>
      
      <ul>
        {podcasts
          .filter((podcast) => user.subscribedPodcasts.some((id) => podcast._id === id))
          .map((podcast) => (
            <PodcastCard
              key={podcast._id}
              podcast={podcast}
              user={user}
              setUser={setUser}
            />
          ))}
      </ul>
      {user.subscribedPodcasts.length === 0 && <p></p>}
    </div>
  );
};

export default SubscribedPodcast;
