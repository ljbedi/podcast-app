import React, { useState, useEffect } from 'react';
import PodcastCard from './PodcastCard';
// import SubscribedPodcast from '../Buttons/SubscribeBtn';

const PodcastList = ({podcasts,user, setUser}) => {
 

  return (
    <>
      <h2>Podcasts</h2>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast._id} 
        podcast={podcast} 
        user = {user} 
        setUser ={setUser}
        />
      ))}
        {/* <SubscribedPodcast/> */}
    </>
  );
};

export default PodcastList;

          // subscribePodcast={subscribePodcast}
          // onPodcastClick={() => handlePodcastClick(podcast._id)}