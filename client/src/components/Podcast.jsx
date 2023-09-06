import React from 'react';
import removeHtml from '../utils/removeHtml';

const Podcast = ({ podcast, subscribePodcast, onPodcastClick }) => {
  return (
    <div>
      <h3 onClick={onPodcastClick}>{podcast.name}</h3>
      <p>{removeHtml(podcast.description)}</p>
      <button onClick={() => subscribePodcast(podcast)}>Subscribe</button>
    </div>
  );
};

export default Podcast;
