import React, { useState } from 'react';


const Podcast = ({ podcast, subscribePodcast, onPodcastClick }) => {
  const [expanded, setExpanded] = useState(false);
  const data = podcast.description;
  const dataForDisplay = expanded ? data : data.slice(0, 100);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const removeHtml = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  return (
    <div>
      <h3 onClick={onPodcastClick}>{podcast.name}</h3>
      <p>{removeHtml(dataForDisplay)}</p>
      {data.length > 100 && (
        <h4 type="button" onClick={toggleExpanded}>
          {expanded ? 'Show Less' : '...Show More'}
        </h4>
      )}
      <button onClick={() => subscribePodcast(podcast)}>Subscribe</button>
    </div>
  );
};

export default Podcast;
