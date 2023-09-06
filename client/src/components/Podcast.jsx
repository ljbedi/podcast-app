import React, { useState } from 'react';

const Podcast = ({ podcast, subscribePodcast }) => {
  const [expanded, setExpanded] = useState(false);
  const data = podcast.description;
  const dataForDisplay = expanded ? data : data.slice(0, 100); 
  return (
    <div>
      <h3>{podcast.name}</h3>
      <p>{dataForDisplay}</p>
      <>{data.length > 100 && (
        <h4 type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : '...Show More'}
        </h4>
      )}</>
      <button onClick={() => subscribePodcast(podcast)}>Subscribe</button>
    </div>
  );
};

export default Podcast;
