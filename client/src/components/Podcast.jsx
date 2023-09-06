import React from 'react';

const Podcast = ({ podcast, subscribePodcast }) => {
  return (
    <div>
      <h3>{podcast.name}</h3>
      <p>{podcast.description}</p>
      <button onClick={() => subscribePodcast(podcast)}>Subscribe</button>
    </div>
  );
};

export default Podcast;
