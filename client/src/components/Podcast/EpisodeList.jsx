import React from 'react';
import styled from 'styled-components';
import removeHtml from '../../utils/removeHtml';
import PodcastCard from '../Home/PodcastCard';

const EpisodeList = ({ podcast, user, setUser }) => {
  const StyledAudioPlayer = styled.audio`
    width: 300px;
    height: 30px;
    background-color: #616e8e;
    border: 3px;
    padding: 5px;
    margin: 20px;
    border-radius: 20px;
  `;

  if (!podcast || !podcast.episodes) {
    return <div>No episodes available</div>;
  }

  return (
    <div>
      <PodcastCard podcast={podcast} user={user} setUser={setUser}/>
      <h4>Description: {podcast.description}</h4>
      <h3>Recent Episodes</h3>
      <ul>
        {podcast.episodes.map((episode) => (
          <li key={episode.uuid}>
            <div dangerouslySetInnerHTML={{ __html: removeHtml(episode.description) }} />
            <StyledAudioPlayer controls>
              <source src={episode.audioUrl} type="audio/mpeg" />
            </StyledAudioPlayer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
