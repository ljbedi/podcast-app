import React, { useState } from 'react';

// Define the styled component
import styled from 'styled-components';

export const StyledPodcast = styled.div`
  background-color: #1e1e1e; /* Spotify's background color */
  color: #fff; /* Text color */
  padding: 16px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  h3 {
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    cursor: pointer;
    color: #007bff; /* Blue color */
  }

  button {
    background-color: #007bff; /* Blue color */
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`;



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
    <StyledPodcast>
      <h3 onClick={onPodcastClick}>{podcast.name}</h3>
      <p>{removeHtml(dataForDisplay)}</p>
      {data.length > 100 && (
        <h4 onClick={toggleExpanded}>
          {expanded ? 'Show Less' : '...Show More'}
        </h4>
      )}
      <button onClick={() => subscribePodcast(podcast)}>Subscribe</button>
    </StyledPodcast>
  );
};

export default Podcast;

